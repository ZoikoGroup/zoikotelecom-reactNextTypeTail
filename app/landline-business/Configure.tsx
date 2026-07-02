"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import StepHeader from "./components/StepHeader";
import StepSidebar from "./components/StepSidebar";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import StepSix from "./components/StepSix";

export default function Configure() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const [selectedProduct, setSelectedProduct] =
    useState("");

  const [selectedAllowance, setSelectedAllowance] =
    useState(1);

  const [selectedPorting, setSelectedPorting] =
    useState(1);

  const [selectedContract, setSelectedContract] =
    useState(2);

  // FIXED TYPE
  const [selectedNumber, setSelectedNumber] = useState(0);

  const [selectedHardware, setSelectedHardware] =
    useState<number | null>(null);

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // ── Configured "Business Landline" → cart → checkout ─────────────────────────
  const PRODUCTS: Record<string, { title: string; base: number }> = {
    digital:       { title: "Digital Landline (Geo Number)", base: 9.99 },
    nongeo:        { title: "Non Geo Number",                base: 4.99 },
    international: { title: "International",                  base: 6.99 },
  };
  const ALLOWANCES: Record<number, { title: string; add: number }> = {
    1: { title: "Pay As You Go",    add: 0 },
    2: { title: "250 Minutes",      add: 5.99 },
    3: { title: "500 Minutes",      add: 9.99 },
    4: { title: "Unlimited Minutes", add: 14.99 },
  };
  const PORTING: Record<number, string> = {
    1: "Keep Existing Number",
    2: "Get a New Number",
  };
  const CONTRACTS: Record<number, { title: string; price: number }> = {
    1: { title: "12 Months", price: 11.99 },
    2: { title: "24 Months", price: 9.99 },
    3: { title: "36 Months", price: 6.99 },
  };
  const NUMBER_TYPES: Record<number, string> = {
    0: "Geographic (01/02)",
    1: "Freephone (0800)",
    2: "National (0845)",
    3: "London (0203)",
  };
  const HARDWARE: Record<number, { title: string; price: number }> = {
    1: { title: "Yealink T31P Desk Phone",   price: 49.99 },
    2: { title: "Gigaset A690 DECT Handset", price: 34.99 },
    3: { title: "ATA VoIP Adapter",          price: 19.99 },
  };

  const handleCheckout = (hardwareId: number | null) => {
    const product = PRODUCTS[selectedProduct] ?? PRODUCTS.digital;
    const allowance = ALLOWANCES[selectedAllowance] ?? ALLOWANCES[1];
    const porting = PORTING[selectedPorting] ?? PORTING[1];
    const contract = CONTRACTS[selectedContract] ?? CONTRACTS[2];
    const numberType = NUMBER_TYPES[selectedNumber] ?? NUMBER_TYPES[0];
    const hw = hardwareId != null ? HARDWARE[hardwareId] : undefined;

    // Monthly = product base (step 1) + contract term (step 4) + call allowance (step 2).
    const monthly = Number(
      (product.base + contract.price + allowance.add).toFixed(2)
    );
    const hardwarePrice = hw ? hw.price : 0;
    const total = Number((monthly + hardwarePrice).toFixed(2));

    const rawItem = {
      id: `business-landline-${Date.now()}`,
      planType: "business_landline",
      category: "business-landline",
      name: "Business Landline",
      planName: "Business Landline",
      planTitle: "Business Landline",
      // configuration summary (stored in the order's cart_raw)
      productType: product.title,
      productPrice: product.base,
      dataAllowance: allowance.title,
      allowance: allowance.title,
      porting,
      planDuration: contract.title,
      contractPrice: contract.price,
      numberType,
      hardware: hw ? hw.title : "None",
      monthlyPrice: monthly,
      hardwarePrice,
      // checkout figures
      price: total,
      finalPrice: total,
      quantity: 1,
      qty: 1,
    };

    try {
      const existing = JSON.parse(localStorage.getItem("cart") ?? "[]");
      const cartArr = Array.isArray(existing) ? existing : [];
      cartArr.push(rawItem);
      localStorage.setItem("cart", JSON.stringify(cartArr));
      window.dispatchEvent(new Event("cart-updated"));
    } catch {
      localStorage.setItem("cart", JSON.stringify([rawItem]));
    }

    router.push("/checkout");
  };

  return (
    <section 
    id="configureplan"
    className="bg-[#F8F5FA] dark:bg-gray-950 py-10 md:py-12 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <StepHeader />

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
          {/* SIDEBAR */}
          <div className="w-full">
            <StepSidebar currentStep={currentStep} />
          </div>

          {/* CONTENT */}
          <div className="min-w-0">
            {/* PROGRESS BAR */}
            <div className="w-full h-[4px] bg-[#EADDF1] rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-[#22C55E] transition-all duration-500"
                style={{
                  width: `${(currentStep / 6) * 100}%`,
                }}
              />
            </div>

            {/* STEP 1 */}
            {currentStep === 1 && (
              <StepOne
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                onNext={nextStep}
              />
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <StepTwo
                selectedAllowance={selectedAllowance}
                setSelectedAllowance={
                  setSelectedAllowance
                }
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <StepThree
                selectedPorting={selectedPorting}
                setSelectedPorting={
                  setSelectedPorting
                }
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <StepFour
                selectedContract={selectedContract}
                setSelectedContract={
                  setSelectedContract
                }
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}

            {/* STEP 5 */}
            {currentStep === 5 && ( <StepFive 
            selectedNumber={selectedNumber} 
            setSelectedNumber={ setSelectedNumber } 
            nextStep={nextStep} prevStep={prevStep} /> )}

            {/* STEP 6 */}
            {currentStep === 6 && (
              <StepSix
                selectedHardware={selectedHardware}
                setSelectedHardware={
                  setSelectedHardware
                }
                prevStep={prevStep}
                onCheckout={handleCheckout}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}