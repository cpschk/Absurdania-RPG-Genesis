"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTAButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl px-10 py-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform",
        className
      )}
      {...props}
    />
  );
}
