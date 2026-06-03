"use client";

import { motion } from "framer-motion";
import { ArrowRight, UserPlus, BookOpen, UserCheck, ShieldAlert, Award, Shield } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "1. Enlist",
    description: "Join our active Discord community and verify your Roblox account to start your recruit registry process.",
  },
  {
    icon: BookOpen,
    title: "2. Basic Training",
    description: "Attend a Boot Camp drill session. Learn command formations, military discipline, and weapon protocols.",
  },
  {
    icon: UserCheck,
    title: "3. Choose Regiment",
    description: "Qualify for elite divisions like the Grenadier Guards, Parachute Regiment, or Royal Military Police.",
  },
  {
    icon: ShieldAlert,
    title: "4. Deploy & Lead",
    description: "Participate in operations, gain service points, and climb the chain of command to earn leadership roles.",
  },
];

const benefits = [
  { title: "Structured Rankings", description: "Clear path of promotion from Recruit up to Commissioned Officer status." },
  { title: "Officer Courses", description: "Real management, leadership, and public speaking training that translates offline." },
  { title: "Custom Gear & Badges", description: "Unlock exclusive regimental uniforms, tactical assets, and medals in Roblox." },
  { title: "Interactive Events", description: "Weekly military roleplay, patrol routines, joint operations, and clan matches." },
];

export default function Recruitment() {
  return (
    <section id="recruitment" className="py-24 bg-army-dark relative">
      {/* Background Camo Overlay */}
      <div className="absolute inset-0 tactical-grid opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-army-gold font-mono block">
            [ JOIN THE FORCE / ENLISTMENT ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
            Recruitment Process
          </h2>
          <div className="h-0.5 w-16 bg-army-gold mx-auto mt-2" />
        </div>

        {/* Steps Walkthrough */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="bg-army-panel/40 border border-army-border p-6 rounded-sm relative group hover:border-army-gold/50 transition-all duration-300"
            >
              {/* Step number badge */}
              <span className="absolute top-4 right-4 text-xs font-mono text-army-gold/40 font-bold">
                0{idx + 1}
              </span>
              
              <div className="flex flex-col space-y-4">
                <div className="p-3 bg-army-green border border-army-border text-army-gold rounded-sm w-fit group-hover:border-army-gold-hover transition-colors">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-white font-extrabold text-lg uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Grid (Benefits & Progression) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-army-panel/20 border border-army-border p-8 sm:p-12 rounded-sm relative overflow-hidden">
          
          {/* Rank Progression Details */}
          <div className="space-y-6">
            <h3 className="text-white font-extrabold text-xl uppercase tracking-wider flex items-center gap-2">
              <Award className="h-5 w-5 text-army-gold" />
              <span>Rank Progression</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono text-gray-400 border-b border-army-border/40 pb-2">
                <span>STAGE 01</span>
                <span className="text-army-gold">RECRUIT (RCT)</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-gray-400 border-b border-army-border/40 pb-2">
                <span>STAGE 02</span>
                <span className="text-army-gold">PRIVATE (PTE)</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-gray-400 border-b border-army-border/40 pb-2">
                <span>STAGE 03</span>
                <span className="text-army-gold">CORPORAL (CPL)</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-gray-400 border-b border-army-border/40 pb-2">
                <span>STAGE 04</span>
                <span className="text-army-gold">SERGEANT (SGT)</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                <span>STAGE 05</span>
                <span className="text-army-gold">COMMISSIONED OFFICER</span>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="space-y-1">
                <h4 className="text-white font-extrabold text-sm uppercase tracking-wide flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-army-gold rounded-full" />
                  <span>{benefit.title}</span>
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed pl-3">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Global Call to Action */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Ready to pledge your allegiance and begin your training? Click below to enlist in our official Discord server.
          </p>
          <a
            href="https://discord.gg/b7EbjWXqx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-3 px-8 py-5 bg-army-gold hover:bg-army-gold-hover text-army-dark font-extrabold tracking-widest text-base uppercase rounded-sm border border-army-gold transition-all duration-300 transform hover:-translate-y-1 gold-glow"
          >
            <span>JOIN TODAY</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
