"use client";

import { useEffect, useState, useRef } from "react";
import { Users, MessageSquare, Shield, Calendar, Award, Star } from "lucide-react";

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const statsData: StatItemProps[] = [
  {
    label: "Roblox Members",
    value: 12500,
    suffix: "+",
    icon: Users,
    description: "Registered military personnel in group",
  },
  {
    label: "Discord Members",
    value: 4200,
    suffix: "+",
    icon: MessageSquare,
    description: "Active community participants online",
  },
  {
    label: "TikTok Followers",
    value: 15300,
    suffix: "+",
    icon: Star, // Placeholder icon or custom representation
    description: "Daily content viewers & subscribers",
  },
  {
    label: "X Followers",
    value: 1800,
    suffix: "+",
    icon: Shield,
    description: "Followers tracking official bulletins",
  },
  {
    label: "Events Hosted",
    value: 450,
    suffix: "+",
    icon: Calendar,
    description: "Joint operations & training exercises",
  },
  {
    label: "Active Recruits",
    value: 85,
    suffix: "%",
    icon: Award,
    description: "Completion rate for basic training",
  },
];

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    const duration = 1500; // ms
    const increment = Math.ceil(end / (duration / 16)); // ~60fps
    let timer: NodeJS.Timeout;

    const run = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(start);
        timer = setTimeout(run, 16);
      }
    };

    run();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [hasStarted, value]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span ref={elementRef} className="font-mono text-3xl sm:text-4xl font-extrabold text-army-gold tracking-tight">
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-army-dark/95 border-y border-army-border relative overflow-hidden">
      {/* Decorative backdrop details */}
      <div className="absolute inset-0 tactical-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-army-gold uppercase block">
            [ SENSOR FEED / STRENGTH REPORT ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
            Community Statistics
          </h2>
          <div className="h-0.5 w-16 bg-army-gold mx-auto mt-2" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="bg-army-panel/30 border border-army-border p-6 rounded-sm flex items-start space-x-5 hover:border-army-border-active transition-all duration-300 relative group"
            >
              {/* Corner Indicators */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-army-gold/40 group-hover:border-army-gold pointer-events-none transition-colors" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-army-gold/40 group-hover:border-army-gold pointer-events-none transition-colors" />

              <div className="p-3 bg-army-green/50 border border-army-border rounded-sm text-army-gold">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline space-x-1.5">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  {stat.label}
                </h3>
                <p className="text-xs text-gray-400 leading-normal">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
