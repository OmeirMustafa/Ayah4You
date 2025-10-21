import React, { useState, useCallback } from 'react';
import type { Ayah } from './types';
import { fetchRandomAyah } from './data/verses';
import AyahCard from './components/AyahCard';
import HealingBubble from './components/HealingBubble';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const App: React.FC = () => {
  const [ayah, setAyah] = useState<Ayah | null>(null);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showLoader, setShowLoader] = useState<boolean>(false);


  const showRandomAyah = useCallback(async () => {
    setIsLoading(true);
    setIsFading(true); // Start fade-out animation for whatever is on screen

    const isInitial = ayah === null;
    const fadeOutDuration = isInitial ? 1000 : 300;
    await delay(fadeOutDuration);

    setShowLoader(true); // Show loader after fade-out

    try {
      const newAyah = await fetchRandomAyah(ayah);
      setAyah(newAyah);
      setError(null); // Clear any previous error on success
    } catch (err) {
      setError('Could not load verse. Please try again.');
    } finally {
      setShowLoader(false);
      setIsFading(false); // Start fade-in animation
      
      // Allow fade-in animation to start before re-enabling the button
      await delay(300);
      setIsLoading(false);
    }
  }, [ayah, error]);

  const renderContent = () => {
    if (showLoader) {
      return <LoadingSpinner />;
    }
    if (error) {
      return <ErrorMessage message={error} onRetry={showRandomAyah} isVisible={!isFading} />;
    }
    if (ayah === null) {
      return <HealingBubble isVisible={!isFading} />;
    }
    return <AyahCard ayah={ayah} isVisible={!isFading} />;
  };

  return (
    <div
      className="min-h-screen text-gray-200 font-sans flex flex-col items-center justify-center p-4 selection:bg-emerald-500 selection:text-white relative overflow-hidden bg-gradient-to-br from-emerald-950 to-green-900"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-1/4 w-72 h-72 bg-emerald-500/20 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 right-0 w-96 h-96 bg-green-400/20 rounded-full filter blur-3xl opacity-60 animate-blob2"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-600/15 rounded-full filter blur-3xl opacity-50 animate-blob3"></div>
      </div>

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-2xl text-center relative z-10">
        <div className="animate-subtle-float">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
            Ayah4You
          </h1>
          <p className="text-lg text-emerald-200 mb-8 [text-shadow:0_1px_5px_rgba(0,0,0,0.3)]">
            Find wisdom and guidance for your daily life.
          </p>
        </div>
        
        <div className="w-full min-h-[250px] flex items-center justify-center">
          {renderContent()}
        </div>

        <p className="mt-8 text-emerald-200 text-sm italic">
          Say bismillah and make intent
        </p>
        <button
          onClick={showRandomAyah}
          disabled={isLoading}
          className="mt-4 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-400/40 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isLoading ? '...' : 'Ayah For Me?'}
        </button>
      </main>

      <footer className="w-full text-center text-gray-400 text-xs mt-8 pb-4 relative z-10">
        <p>Quran text &copy; AlQuran.Cloud – Translation &copy; Sahih International</p>
      </footer>
    </div>
  );
};

export default App;