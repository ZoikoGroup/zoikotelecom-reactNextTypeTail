"use client";

import { useState } from "react";

import StepHeader from "./components/StepHeader";
import StepSidebar from "./components/StepSidebar";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";
import StepSix from "./components/StepSix";

export default function Configure() {
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
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}