import Link from "next/link";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/10 to-gray-900 animate-[shimmer_20s_ease-in-out_infinite] bg-[size:200%_200%]" />
      </div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
            Absurdania
          </span> <span className="animate-heartbeat inline-block">RPG</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          El juego donde el caos piensa y el absurdo tiene reglas
        </p>
        <Link href="https://discord.gg/NHGNScvS" target="_blank" rel="noopener noreferrer">
          <CTAButton>
            <span className="flex flex-col items-center">
              <span>¡Únete al caos creativo!</span>
              <span className="text-sm font-normal opacity-80">En Discord...</span>
            </span>
          </CTAButton>
        </Link>
      </div>
    </div>
  );
}
