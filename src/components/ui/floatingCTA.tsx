"use client";

interface FloatingCTAProps {
  onClick: () => void;
}

export default function FloatingCTA({
  onClick,
}: FloatingCTAProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-black px-7 py-4 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
    >
      Let's Talk →
    </button>
  );
}