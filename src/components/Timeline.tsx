"use client";

import { motion } from "framer-motion";
import { Shield, Rocket, Users, Video, Award, Target, HelpCircle, Trophy } from "lucide-react";

interface TimelineItem {
  icon: React.ComponentType<{ className?: string }>;
  date: string;
  title: string;
  description: string;
  tag: string;
}

const timelineData: TimelineItem[] = [
  {
    icon: Rocket,
    date: "OCTOBER 2024",
    title: "Community Mobilization",
    description: "Sam's British Army launched its initial enlistment phase, opening recruitment offices on Discord and establishing tactical standards.",
    tag: "LAUNCH",
  },
  {
    icon: Users,
    date: "DECEMBER 2024",
    title: "Roblox Registry Integration",
    description: "Officially registered the Roblox Group and deployed the initial Sandbox Basic Training camp for recruits to practice drill movements.",
    tag: "ROBLOX",
  },
  {
    icon: Shield,
    date: "FEBRUARY 2025",
    title: "Regimental Formations",
    description: "Commissioned key regiments including the Grenadier Guards and Military Police, establishing standard uniforms and custom gear.",
    tag: "REGIMENTS",
  },
  {
    icon: Video,
    date: "MAY 2025",
    title: "TikTok Media Surge",
    description: "Launched high-impact TikTok edits showcasing live operations. The community viral clips gathered over 100K views in the first month.",
    tag: "MEDIA",
  },
  {
    icon: Target,
    date: "AUGUST 2025",
    title: "Operation Iron Shield",
    description: "Executed the first major multi-clan joint exercise with 80+ active personnel conducting a defensive tactical holdout inside Roblox.",
    tag: "OPERATIONS",
  },
  {
    icon: Award,
    date: "NOVEMBER 2025",
    title: "Discord HQ Growth",
    description: "Discord verified server metrics reached 3,000+ members, introducing automated role progression bots and verification tools.",
    tag: "COMMUNITY",
  },
  {
    icon: Trophy,
    date: "MARCH 2026",
    title: "Elite Command Academy",
    description: "Inaugurated the Officer Training Corps (OTC) to prepare community members for leadership roles, promoting the first class of officers.",
    tag: "LEADERSHIP",
  },
  {
    icon: Target,
    date: "JUNE 2026",
    title: "10,000+ Roblox Soldiers",
    description: "Sam's British Army officially surpassed 12,000 group members, hosting a massive military parade and awards ceremony.",
    tag: "MILESTONE",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-army-dark relative overflow-hidden">
      {/* Decorative background grid and radar ring */}
      <div className="absolute inset-0 tactical-grid opacity-5 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 border border-army-gold/5 rounded-full pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-army-gold uppercase block">
            [ HISTORICAL RECORD / ARCHIVES ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
            Campaign Timeline
          </h2>
          <div className="h-0.5 w-16 bg-army-gold mx-auto mt-2" />
        </div>

        {/* Timeline Core */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-army-gold via-army-border to-transparent -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative items-start md:items-center`}
                >
                  {/* Central Node Indicator */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-army-dark border border-army-gold flex items-center justify-center -translate-x-1/2 z-20 gold-glow">
                    <item.icon className="h-4 w-4 text-army-gold" />
                  </div>

                  {/* Left/Right Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="bg-army-panel/40 border border-army-border hover:border-army-border-active p-6 rounded-sm transition-all duration-300 gold-glow-hover relative tactical-corner-bl tactical-corner-tr"
                    >
                      {/* Technical Meta Tag */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono text-army-gold tracking-widest uppercase">
                          {item.date}
                        </span>
                        <span className="px-2 py-0.5 bg-army-green border border-army-border text-[9px] font-mono text-army-gold tracking-wider uppercase rounded-sm">
                          {item.tag}
                        </span>
                      </div>

                      {/* Heading */}
                      <h3 className="text-white font-extrabold text-lg uppercase tracking-wide mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop Aligning */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
