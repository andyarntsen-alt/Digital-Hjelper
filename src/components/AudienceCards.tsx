'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface AudienceCard {
  key: string;
  icon: React.ReactNode;
  bgColor: string;
  iconBgColor: string;
}

export default function AudienceCards() {
  const t = useTranslations('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const cards: AudienceCard[] = [
    {
      key: 'elderly',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      iconBgColor: 'bg-blue-100 group-hover:bg-blue-200',
      icon: (
        <svg className="h-6 w-6 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      key: 'newToNorway',
      bgColor: 'bg-emerald-50 hover:bg-emerald-100',
      iconBgColor: 'bg-emerald-100 group-hover:bg-emerald-200',
      icon: (
        <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
    },
    {
      key: 'helpers',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      iconBgColor: 'bg-purple-100 group-hover:bg-purple-200',
      icon: (
        <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto lg:mx-0">
      {cards.map((card, index) => (
        <button
          key={card.key}
          onClick={() => {
            const element = document.getElementById('tjenester');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`
            group
            flex flex-col items-center sm:items-start
            p-4 sm:p-5
            ${card.bgColor}
            rounded-xl
            shadow-sm hover:shadow-md
            transition-all duration-300 ease-out
            transform hover:-translate-y-1
            cursor-pointer
            text-left
            ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'}
          `}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <div className={`
            w-12 h-12
            ${card.iconBgColor}
            rounded-full
            flex items-center justify-center
            mb-3
            transition-colors duration-300
          `}>
            {card.icon}
          </div>
          <h3 className="font-bold text-gray-800 text-base">
            {t(card.key)}
          </h3>
          <p className="text-gray-600 text-sm mt-1 hidden sm:block">
            {t(`${card.key}Desc`)}
          </p>
        </button>
      ))}
    </div>
  );
}
