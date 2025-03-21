import { Button } from "@/components/ui/button";
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSection = () => {
  const words = [
    {
      text: "Transform",
    },
    {
      text: "Your",
    },
    {
      text: "Business",
      className: "text-blue-500",
    },
    {
      text: "With",
    },
    {
      text: "MarketTech",
      className: "text-blue-500",
    },
  ];

  const wordsSmooth = [
    {
      text: "Innovation",
    },
    {
      text: "Strategy",
      className: "text-blue-500",
    },
    {
      text: "Results",
      className: "text-green-500",
    },
  ];

  return (
    <div className="py-20 md:py-32 flex flex-col items-center justify-center text-center px-4 from-background to-muted/50">
      <div className="mb-4">
        <TypewriterEffect words={words} />
      </div>

      <div className="max-w-3xl mx-auto mb-2">
        <TypewriterEffectSmooth words={wordsSmooth} className="mb-8" />

        <p className="text-muted-foreground text-lg mb-8">
          We provide cutting-edge marketing technology solutions to help your business
          grow and succeed in today's digital landscape.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <HoverBorderGradient>
          <Link href="#contact">Get Started</Link>
        </HoverBorderGradient>
        <Button size="lg" asChild>
          <Link href="#services">Our Services</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

