"use client";

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full opacity-60"
        />
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gradient leading-tight">
            Websites, Marketing, and Social Media That Grow Your Business
          </h1>
          <p className="text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
            Elevate provides end-to-end digital solutions including custom website builds, proactive maintenance, and strategic content creation designed to scale your brand's online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-secondary-container text-white px-8 py-6 rounded-xl text-lg hover:shadow-[0_0_20px_rgba(2,49,222,0.3)] transition-all">
              Book a Free Consultation
            </Button>
            <Button variant="outline" className="glass-card text-white px-8 py-6 rounded-xl text-lg hover:bg-white/5 transition-all border-white/10">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary-container/10 blur-[120px] -z-10 rounded-full"></div>
    </section>
  );
};