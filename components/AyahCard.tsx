import React from 'react';
import type { Ayah } from '../types';

interface AyahCardProps {
  ayah: Ayah;
  isVisible: boolean;
}

const AyahCard: React.FC<AyahCardProps> = ({ ayah, isVisible }) => {
  return (
    <div
      className={`w-full max-w-xl p-6 md:p-8 bg-black bg-opacity-20 backdrop-blur-md rounded-2xl shadow-2xl border border-emerald-500/20 transition-opacity duration-300 ease-in-out animate-card-enter ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <blockquote className="text-center">
        <p className="font-amiri italic text-2xl md:text-3xl text-white leading-relaxed mb-6 [text-shadow:0_0_12px_rgba(110,231,183,0.6),0_0_2px_rgba(255,255,255,0.8)]">
          &ldquo;{ayah.englishText}&rdquo;
        </p>
      </blockquote>
      <footer className="text-right">
        <p className="text-md font-semibold text-emerald-300">
          {ayah.surahName} ({ayah.surahNumber}:{ayah.ayahNumber})
        </p>
      </footer>
    </div>
  );
};

export default AyahCard;
