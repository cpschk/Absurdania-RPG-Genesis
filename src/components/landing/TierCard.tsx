"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type TierCardProps = {
  price: number;
  reward: string;
};

export function TierCard({ price, reward }: TierCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isHighTier = price >= 250;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className={`p-1 rounded-lg bg-gradient-to-br ${isHighTier ? 'from-yellow-400 to-orange-500' : 'from-purple-500 to-pink-600'} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
        <CollapsibleTrigger className="w-full">
          <Card className="bg-gray-900 h-full text-center border-none rounded-b-none">
            <CardHeader>
              <CardTitle className={`text-4xl font-black bg-gradient-to-br ${isHighTier ? 'from-yellow-400 to-orange-500' : 'from-purple-500 to-pink-600'} text-transparent bg-clip-text`}>
                ${price} USD
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg px-2">{reward}</p>
            </CardContent>
          </Card>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="bg-[#fdf3d9] text-gray-800 p-4 -mt-1 shadow-inner border-t-2 border-yellow-700/50 rounded-b-lg">
          <p className="text-sm italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
