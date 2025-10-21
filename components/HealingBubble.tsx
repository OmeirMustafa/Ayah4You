import React from 'react';

interface HealingBubbleProps {
  isVisible: boolean;
}

const HealingBubble: React.FC<HealingBubbleProps> = ({ isVisible }) => {
  return (
    <div
      className={
        isVisible ? 'animate-deep-float' : 'animate-bubble-out'
      }
    >
      <div className="relative w-56 h-56">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-green-500/40 rounded-full animate-pulse blur-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-amiri text-white font-bold [text-shadow:0_2px_20px_rgba(110,231,183,0.7)]">
            Heal
          </span>
        </div>
      </div>
    </div>
  );
};

export default HealingBubble;
