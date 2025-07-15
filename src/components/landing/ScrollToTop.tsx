'use client';

import { ArrowUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function ScrollToTop() {
  const isMobile = useIsMobile();
  const scrolled = useScroll(400);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isMobile) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg transition-opacity duration-300',
        'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
        scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      variant="default"
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}
