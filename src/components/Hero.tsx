"use client";

import { motion } from "framer-motion";
import { Shield, MessageSquare, ChevronRight } from "lucide-react";

// Inline icons for TikTok and Roblox
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.06-1.39v6.52c-.04 2.12-.9 4.26-2.6 5.48-1.78 1.34-4.27 1.7-6.38 1.01-2.27-.67-4.14-2.58-4.66-4.9-.76-3.04.83-6.43 3.82-7.46.9-.32 1.88-.41 2.82-.32v4.06c-.8-.22-1.69-.11-2.4.32-.98.56-1.5 1.77-1.31 2.89.2 1.25 1.24 2.27 2.49 2.37 1.56.16 3.08-1.01 3.14-2.58.02-3.87 0-7.74.01-11.61.02-.13.01-.27.01-.4z" />
  </svg>
);

const RobloxIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.82 22L2 18.82 5.18 2 22 5.18 18.82 22zm-7.95-12.7L9.5 14.5l5.2 1.13 1.37-5.2-5.2-1.13z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-army-dark overflow-hidden pt-20"
    >
      {/* Background image with color burn/overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 mix-blend-luminosity scale-105"
        style={{ backgroundImage: "url('/sam-britsh-army/images/hero_banner.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-army-dark via-army-dark/80 to-transparent" />

      {/* Grid Pattern and Scanlines */}
      <div className="absolute inset-0 tactical-grid opacity-30 pointer-events-none" />

      {/* Radar Overlay (Rotating slowly) */}
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] border border-army-gold/10 rounded-full pointer-events-none hidden lg:block">
        <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-gradient-to-r from-army-gold/40 to-transparent origin-left radar-sweep-effect" />
        <div className="absolute inset-20 border border-army-gold/5 rounded-full" />
        <div className="absolute inset-40 border border-army-gold/5 rounded-full" />
      </div>

      {/* Hero content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center space-y-8">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 bg-army-panel/60 border border-army-border backdrop-blur-sm rounded-sm text-xs text-army-gold uppercase tracking-widest font-mono select-none"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-army-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-army-gold"></span>
          </span>
          <span>COMMUNITY HUB STATUS: ONLINE</span>
        </motion.div>

        {/* Title */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-sans"
          >
            Sam's <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-army-gold to-white">
              British Army
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300 font-medium leading-relaxed"
          >
            Building Leadership, Discipline, and Community Through Immersive Military Roleplay.
          </motion.p>
        </div>

        {/* CTA Button Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6"
        >
          {/* Join Roblox Group */}
          <a
            href="https://www.roblox.com/share/g/35566756"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 px-6 py-4 bg-army-gold hover:bg-army-gold-hover text-army-dark font-extrabold tracking-wider text-sm uppercase rounded-sm border border-army-gold transition-all duration-300 transform hover:-translate-y-1 gold-glow"
          >
            <RobloxIcon className="h-5 w-5" />
            <span>Roblox Group</span>
          </a>

          {/* Join Discord */}
          <a
            href="https://discord.gg/b7EbjWXqx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 px-6 py-4 bg-army-panel hover:bg-army-panel-hover text-white font-extrabold tracking-wider text-sm uppercase rounded-sm border border-army-border hover:border-army-gold/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <MessageSquare className="h-5 w-5 text-army-gold" />
            <span>Join Discord</span>
          </a>

          {/* Follow on TikTok */}
          <a
            href="https://www.tiktok.com/@samsbritisharmy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 px-6 py-4 bg-army-panel hover:bg-army-panel-hover text-white font-extrabold tracking-wider text-sm uppercase rounded-sm border border-army-border hover:border-army-gold/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <TikTokIcon className="h-5 w-5 text-army-gold" />
            <span>Follow TikTok</span>
          </a>

          {/* Follow on X */}
          <a
            href="https://x.com/samsbritisharmy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 px-6 py-4 bg-army-panel hover:bg-army-panel-hover text-white font-extrabold tracking-wider text-sm uppercase rounded-sm border border-army-border hover:border-army-gold/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            <XIcon className="h-5 w-5 text-army-gold" />
            <span>Follow X</span>
          </a>
        </motion.div>

        {/* Scrolling Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-army-gold">
            SECURE ACCESS DOWN
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-army-gold to-transparent animate-bounce" />
        </motion.div>
      </div>

      {/* Decorative Border Details */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-army-border to-transparent" />
      <div className="absolute top-10 left-10 text-[10px] font-mono text-army-gold/30 uppercase tracking-widest hidden md:block select-none">
        LAT: 51.5074° N | LON: 0.1278° W
      </div>
      <div className="absolute top-10 right-10 text-[10px] font-mono text-army-gold/30 uppercase tracking-widest hidden md:block select-none">
        SBA-UK.COM // GRIDSEC_A
      </div>
    </section>
  );
}
