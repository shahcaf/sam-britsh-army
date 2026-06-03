"use client";

import { Shield, Award, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Award,
    title: "Leadership",
    description: "Develop operational management and strategic organization skills through officership and command pipelines.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Operate as a cohesive tactical unit where communication, coordination, and mutual support are vital to mission success.",
  },
  {
    icon: Shield,
    title: "Discipline",
    description: "Adhere to the high standards, ranks, protocols, and instructions modeled directly on real British military routines.",
  },
  {
    icon: Target,
    title: "Immersive Roleplay",
    description: "Participate in highly-coordinated operations, patrols, and realistic training exercises inside Roblox.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-army-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-army-gold/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Text & Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-army-gold font-mono block">
                [ SERVICE BRIEFING ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                About the Community
              </h2>
            </div>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans italic border-l-4 border-army-gold pl-4 bg-army-panel/20 py-4 pr-4 rounded-r-sm">
              "Sam's British Army is a dedicated British military roleplay community bringing together players who value teamwork, leadership, discipline, and immersive experiences. Through Roblox, Discord, TikTok, and X, members participate in military training, operations, community events, and social engagement while building lasting friendships and leadership skills."
            </p>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Founded on the values of the British Army, our operations are designed to challenge recruits, prepare specialists for regimental duties, and provide a secure, fun gaming experience. We maintain active divisions ranging from tactical infantry units to elite logistical corps.
            </p>
          </div>

          {/* Right: Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-army-panel/40 border border-army-border hover:border-army-border-active p-6 rounded-sm transition-all duration-300 gold-glow-hover group tactical-corner relative"
              >
                <div className="flex flex-col space-y-4">
                  <div className="p-3 bg-army-green border border-army-border rounded-sm w-fit group-hover:border-army-gold/40 transition-colors">
                    <pillar.icon className="h-6 w-6 text-army-gold" />
                  </div>
                  <h3 className="text-white font-extrabold text-lg uppercase tracking-wide group-hover:text-army-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
