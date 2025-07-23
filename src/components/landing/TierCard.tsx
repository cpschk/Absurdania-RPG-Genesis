
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Gem, Gift, Heart, Megaphone, Shield, Skull, Star, Zap } from "lucide-react";

type TierCategory = "creyente" | "colaborador" | "creador";

type TierCardProps = {
  icon: React.ReactNode;
  tierName: string;
  price: number;
  reward: string;
  description: string;
  category: TierCategory;
};

const categoryStyles = {
  creyente: {
    borderColor: "border-purple-500/50",
    iconColor: "text-purple-400",
    titleColor: "text-purple-300",
  },
  colaborador: {
    borderColor: "border-cyan-500/50",
    iconColor: "text-cyan-400",
    titleColor: "text-cyan-300",
  },
  creador: {
    borderColor: "border-yellow-500/50",
    iconColor: "text-yellow-400",
    titleColor: "text-yellow-300",
  },
};

export function TierCard({ icon, tierName, price, reward, description, category }: TierCardProps) {
  const styles = categoryStyles[category];

  return (
    <div className={cn("bg-gray-900/70 border rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-purple-500/20 h-full flex flex-col", styles.borderColor)}>
      <div className={cn("p-6 text-center border-b flex-grow flex flex-col items-center justify-start", styles.borderColor)}>
        <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4", styles.iconColor)}>
          {icon}
        </div>
        <h3 className={cn("text-2xl font-bold font-headline tracking-wider", styles.titleColor)}>{tierName}</h3>
        <p className="text-4xl font-black text-white my-2">${price}</p>
        <p className="font-semibold text-gray-200 h-12">{reward}</p>
      </div>
      <div className="p-6 text-center">
        <details className="text-gray-400">
          <summary className="cursor-pointer text-sm font-medium text-purple-400 hover:underline focus:outline-none">
            Ver más detalles
          </summary>
          <p className="text-sm mt-3 text-left">
            {description}
          </p>
        </details>
      </div>
    </div>
  );
}
