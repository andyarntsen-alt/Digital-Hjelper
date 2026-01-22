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
    <div className="card">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      {/* Fremdriftsindikator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">{t('progress')}</span>
          <span className="text-nav-blue font-bold">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-nav-blue rounded-full h-4 transition-all duration-500"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* Steg-liste */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`rounded-xl border-2 transition-all duration-300 ${
              currentStep === index
                ? 'border-nav-blue bg-blue-50'
                : completedSteps.includes(index)
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <button
              onClick={() => setCurrentStep(index)}
              className="w-full p-4 text-left flex items-start gap-4"
              aria-expanded={currentStep === index}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold ${
                  completedSteps.includes(index)
                    ? 'bg-green-500 text-white'
                    : currentStep === index
                    ? 'bg-nav-blue text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {completedSteps.includes(index) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-gray-400 transition-transform ${currentStep === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {currentStep === index && (
              <div className="px-4 pb-4">
                <div className="ml-0 md:ml-14">
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                    {step.description}
                  </p>

                  {step.tip && (
                    <div className="tip-box mb-4">
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-green-800">{t('tip')}</p>
                          <p className="text-green-700">{step.tip}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.warning && (
                    <div className="warning-box mb-4">
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-yellow-800">{t('warning')}</p>
                          <p className="text-yellow-700">{step.warning}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => handleComplete(index)}
                    className={`mt-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      completedSteps.includes(index)
                        ? 'bg-green-100 text-green-700 cursor-default'
                        : 'bg-nav-blue text-white hover:bg-nav-dark'
                    }`}
                  >
                    {completedSteps.includes(index) ? (
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            )}
          </div>
        ))}
      </div>

      {completedSteps.length === steps.length && (
        <div className="mt-8 p-6 bg-green-100 rounded-xl text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-2xl font-bold text-green-800 mb-2">{t('congratulations')}</h3>
          <p className="text-green-700 text-lg">{t('allStepsComplete')}</p>
        </div>
      )}
    </div>
  );
}
