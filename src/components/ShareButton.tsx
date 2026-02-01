'use client';

import { useTranslations } from 'next-intl';

export default function ShareButton() {
  const t = useTranslations('common');
  const tToast = useTranslations('toast');

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: tToast('linkCopied') }
      }));
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: tToast('linkCopied') }
      }));
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors print:hidden"
      aria-label={t('share')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      <span className="hidden sm:inline">{t('share')}</span>
    </button>
  );
}
