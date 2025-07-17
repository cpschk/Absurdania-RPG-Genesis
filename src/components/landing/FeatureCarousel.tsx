"use client";

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { FeatureCard } from "@/components/landing/FeatureCard";

type Feature = {
  icon: string;
  title: string;
};

type FeatureCarouselProps = {
  features: Feature[];
};

export function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-700/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl shadow-2xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        ¿Con qué cuenta ya el juego?
      </h2>
      <div className="flex flex-col items-center">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-1 h-full">
                  <FeatureCard icon={feature.icon} title={feature.title} className="h-full" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="block" />
          <CarouselNext className="block" />
        </Carousel>
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                current === index + 1 ? 'bg-purple-500' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
