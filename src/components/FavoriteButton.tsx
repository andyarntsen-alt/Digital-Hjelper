'use client';

import { useState, useEffect } from 'react';

interface FavoriteButtonProps {
  guideId: string;
  title: string;
}

export default function FavoriteButton({ guideId, title }: FavoriteButtonProps) {
  const [mounted, setMounted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setMounted(true);
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some((f: any) => f.id === guideId));
  }, [guideId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (isFavorite) {
      const newFavorites = favorites.filter((f: any) => f.id !== guideId);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      favorites.push({ id: guideId, title, addedAt: new Date().toISOString() });
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
  };

  // Show a placeholder until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 bg-white border-gray-300 text-gray-600"
        disabled
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        <span>Lagre som favoritt</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleFavorite}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
        isFavorite
          ? 'bg-yellow-50 border-yellow-400 text-yellow-700'
          : 'bg-white border-gray-300 text-gray-600 hover:border-yellow-400'
      }`}
      aria-label={isFavorite ? 'Fjern fra favoritter' : 'Legg til favoritter'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`}
        fill={isFavorite ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
      <span>{isFavorite ? 'Fjern favoritt' : 'Lagre som favoritt'}</span>
    </button>
  );
}
