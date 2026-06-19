"use client";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { forwardRef, useImperativeHandle, useState } from "react";

export type StripePaymentFormRef = {
  submitPayment: () => Promise<{ success: boolean; error?: string }>;
};

interface StripePaymentFormProps {
  onPaymentSuccess?: () => void;
  onPaymentError?: (error: string) => void;
}

const StripePaymentForm = forwardRef<StripePaymentFormRef, StripePaymentFormProps>(
  ({ onPaymentSuccess, onPaymentError }, ref) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useImperativeHandle(ref, () => ({
      async submitPayment() {
        if (!stripe || !elements) {
          const error = "Stripe is not loaded yet";
          setErrorMessage(error);
          onPaymentError?.(error);
          return { success: false, error };
        }

        setLoading(true);
        setErrorMessage("");

        try {
          const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
              return_url: `${window.location.origin}/payment-success`,
            },
            redirect: "if_required",
          });

          if (error) {
            const errorMsg = error.message || "Payment failed";
            setErrorMessage(errorMsg);
            onPaymentError?.(errorMsg);
            return { success: false, error: errorMsg };
          }

          onPaymentSuccess?.();
          return { success: true };
        } catch (err: any) {
          const errorMsg = err.message || "An unexpected error occurred";
          setErrorMessage(errorMsg);
          onPaymentError?.(errorMsg);
          return { success: false, error: errorMsg };
        } finally {
          setLoading(false);
        }
      },
    }));

    return (
      <div>
        <PaymentElement
          options={{
            layout: "tabs",
          }}
        />
        {errorMessage && (
          <div className="alert alert-danger mt-3" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);

StripePaymentForm.displayName = "StripePaymentForm";
export default StripePaymentForm;