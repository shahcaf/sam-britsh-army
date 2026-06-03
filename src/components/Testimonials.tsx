"use client";

import { motion } from "framer-motion";
import { Quote, Star, ShieldCheck } from "lucide-react";

interface Testimonial {
  name: string;
  rank: string;
  division: string;
  evaluation: string;
  enlistedSince: string;
  securityClearance: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Lt. Col. Henderson",
    rank: "COMMISSIONED OFFICER",
    division: "Grenadier Guards Command",
    evaluation: "Sam's British Army is easily the most disciplined and immersive roleplay community I've joined on Roblox. The officers take training seriously, and the strategic operation simulations are challenging and incredibly detailed.",
    enlistedSince: "Nov 2024",
    securityClearance: "LEVEL 3 / CLEAR",
  },
  {
    name: "Sgt. Miller",
    rank: "NON-COMMISSIONED OFFICER",
    division: "Royal Military Police",
    evaluation: "The leadership courses here are no joke. I joined as a standard Recruit and worked my way up. Organizing patrol sessions and leading boot camps has genuinely built up my confidence and speaking skills. Great group of friends.",
    enlistedSince: "Jan 2025",
    securityClearance: "LEVEL 2 / CLEAR",
  },
  {
    name: "Cpl. Jenkins",
    rank: "ACTIVE INFANTRY",
    division: "Parachute Regiment",
    evaluation: "Weekly Operations are the highlight of my week. We use voice channels to coordinate tactics, breaching, and formations. If you want a gaming group that respects cooperation and organization, enlist immediately.",
    enlistedSince: "May 2025",
    securityClearance: "LEVEL 1 / CLEAR",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-army-dark relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-army-gold/1 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-army-gold font-mono block">
            [ SERVICE REVIEWS / REPORTS ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
            Personnel Evaluations
          </h2>
          <div className="h-0.5 w-16 bg-army-gold mx-auto mt-2" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-army-panel/40 border border-army-border hover:border-army-border-active p-6 rounded-sm flex flex-col justify-between transition-all duration-300 relative group tactical-corner"
            >
              {/* Report style header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-army-border/60 pb-3 text-[10px] font-mono text-gray-500">
                  <span>EVALUATION LOG: SBA-{idx + 101}</span>
                  <span className="text-army-gold">{test.securityClearance}</span>
                </div>

                <Quote className="h-8 w-8 text-army-gold/20" />

                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{test.evaluation}"
                </p>
              </div>

              {/* Signoff footer */}
              <div className="pt-6 mt-6 border-t border-army-border/40 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-extrabold text-sm uppercase tracking-wide">
                    {test.name}
                  </h4>
                  <p className="text-army-gold font-mono text-[9px] uppercase tracking-wider">
                    {test.rank}
                  </p>
                  <p className="text-gray-500 text-[10px]">
                    {test.division}
                  </p>
                </div>
                
                <div className="flex flex-col items-end text-[9px] font-mono text-gray-500">
                  <span>JOINED</span>
                  <span className="text-gray-300">{test.enlistedSince}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
