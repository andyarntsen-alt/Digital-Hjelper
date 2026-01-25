'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface Step {
  title: string;
  description: string;
  tip?: string;
  warning?: string;
  image?: string;
}

interface StepGuideProps {
  title: string;
  steps: Step[];
}

export default function StepGuide({ title, steps }: StepGuideProps) {
  const t = useTranslations('stepGuide');
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleComplete = (index: number) => {
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);
    }
    if (index < steps.length - 1) {
      setCurrentStep(index + 1);
    }
  };

  const progress = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <div className="card !p-4 sm:!p-6 md:!p-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{title}</h2>

      {/* Fremdriftsindikator - skjul ved utskrift */}
      <div className="print:hidden mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-1.5 sm:mb-2">
          <span className="font-medium text-sm sm:text-base">{t('progress')}</span>
          <span className="text-nav-blue font-bold text-sm sm:text-base">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3">
          <div
            className="bg-nav-blue rounded-full h-2.5 sm:h-3 transition-all duration-500"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* Steg-liste */}
      <div className="space-y-3 sm:space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`rounded-lg sm:rounded-xl border-2 transition-all duration-300 ${
              currentStep === index
                ? 'border-nav-blue bg-blue-50'
                : completedSteps.includes(index)
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <button
              onClick={() => setCurrentStep(index)}
              className="w-full p-3 sm:p-4 text-left flex items-start gap-3 sm:gap-4"
              aria-expanded={currentStep === index}
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm sm:text-base ${
                  completedSteps.includes(index)
                    ? 'bg-green-500 text-white'
                    : currentStep === index
                    ? 'bg-nav-blue text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {completedSteps.includes(index) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 leading-snug">{step.title}</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`print:hidden h-5 w-5 sm:h-6 sm:w-6 text-gray-400 transition-transform flex-shrink-0 ${currentStep === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`px-3 pb-3 sm:px-4 sm:pb-4 ${currentStep === index ? 'block' : 'hidden print:block'}`}>
                <div className="ml-0 sm:ml-11 md:ml-14">
                  <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    {step.description}
                  </p>

                  {step.tip && (
                    <div className="tip-box mb-3 sm:mb-4 !p-3 sm:!p-4">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-green-800 text-sm sm:text-base">{t('tip')}</p>
                          <p className="text-green-700 text-sm sm:text-base">{step.tip}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.warning && (
                    <div className="warning-box mb-3 sm:mb-4 !p-3 sm:!p-4">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-yellow-800 text-sm sm:text-base">{t('warning')}</p>
                          <p className="text-yellow-700 text-sm sm:text-base">{step.warning}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => handleComplete(index)}
                    className={`print:hidden mt-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                      completedSteps.includes(index)
                        ? 'bg-green-100 text-green-700 cursor-default'
                        : 'bg-nav-blue text-white hover:bg-nav-dark active:bg-nav-dark'
                    }`}
                  >
                    {completedSteps.includes(index) ? (
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {t('completed')}
                      </span>
                    ) : index < steps.length - 1 ? (
                      t('markCompleteAndContinue')
                    ) : (
                      t('markComplete')
                    )}
                  </button>
                </div>
              </div>
          </div>
        ))}
      </div>

      {completedSteps.length === steps.length && (
        <div className="print:hidden mt-6 sm:mt-8 p-4 sm:p-6 bg-green-100 rounded-lg sm:rounded-xl text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-green-600 mx-auto mb-3 sm:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">{t('congratulations')}</h3>
          <p className="text-green-700 text-sm sm:text-base">{t('allStepsComplete')}</p>
        </div>
      )}
    </div>
  );
}
