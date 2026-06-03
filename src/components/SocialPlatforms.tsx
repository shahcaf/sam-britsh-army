"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, Shield, Star, ExternalLink, Activity, Send } from "lucide-react";

// Icons declarations
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

const platforms = [
  {
    name: "Roblox",
    icon: RobloxIcon,
    tag: "ROLEPLAY & REGIMENTS",
    link: "https://www.roblox.com/share/g/35566756",
    color: "from-red-950/20 to-army-dark/80",
    border: "border-red-900/30 hover:border-army-gold/65",
    features: [
      "Tactical operations & patrols",
      "Specialist regiments (Guards, Paras, MP)",
      "Structured basic training camps",
      "Interactive rank & uniform system",
    ],
    highlight: "Group ID: 35566756",
    actionText: "Visit Roblox Group",
  },
  {
    name: "Discord",
    icon: MessageSquare,
    tag: "COMMUNITY HUB",
    link: "https://discord.gg/b7EbjWXqx",
    color: "from-blue-950/20 to-army-dark/80",
    border: "border-blue-900/30 hover:border-army-gold/65",
    features: [
      "Official operational briefings",
      "Recruitment & enlistment desk",
      "Chain of command communications",
      "Joint-community social events",
    ],
    highlight: "Recruitment Status: ACTIVE",
    actionText: "Join Discord Server",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    tag: "MEDIA & HIGHLIGHTS",
    link: "https://www.tiktok.com/@samsbritisharmy",
    color: "from-purple-950/20 to-army-dark/80",
    border: "border-purple-900/30 hover:border-army-gold/65",
    features: [
      "Operational cinematic video edits",
      "Basic training funny compilations",
      "Community milestones & updates",
      "Viral recruitment campaigns",
    ],
    highlight: "@samsbritisharmy",
    actionText: "Follow on TikTok",
  },
  {
    name: "X (Twitter)",
    icon: Send,
    tag: "BULLETINS & LOGISTICS",
    link: "https://x.com/samsbritisharmy",
    color: "from-sky-950/20 to-army-dark/80",
    border: "border-sky-900/30 hover:border-army-gold/65",
    features: [
      "Official commander updates",
      "Event notification bulletins",
      "Promotions & demotions registry",
      "Diplomatic announcements",
    ],
    highlight: "@samsbritisharmy",
    actionText: "Follow on X",
  },
];

export default function SocialPlatforms() {
  return (
    <section id="socials" className="py-24 bg-army-dark relative">
      {/* Grid line divider overlay */}
      <div className="absolute inset-0 tactical-grid opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-army-gold font-mono block">
              [ THE NETWORK / CHANNELS ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
              Community Platforms
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            Our forces operate across four primary networks. Join the hubs below to coordinate your training, review operations, and engage with our members.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`bg-gradient-to-br ${platform.color} border ${platform.border} p-8 rounded-sm transition-all duration-500 gold-glow-hover flex flex-col justify-between relative group overflow-hidden`}
            >
              {/* Glowing decorative background card line */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-army-gold/5 rounded-full blur-2xl pointer-events-none group-hover:bg-army-gold/10 transition-colors duration-500" />
              
              {/* Header details */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-army-gold uppercase block">
                      {platform.tag}
                    </span>
                    <h3 className="text-2xl font-black uppercase text-white tracking-wider flex items-center gap-2">
                      {platform.name}
                    </h3>
                  </div>
                  <div className="p-3 bg-army-panel border border-army-border text-army-gold group-hover:border-army-gold-hover transition-colors rounded-sm">
                    <platform.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 pt-4">
                  {platform.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center space-x-2.5 text-sm text-gray-300">
                      <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-army-gold/60" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Area */}
              <div className="pt-8 mt-6 border-t border-army-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-army-gold">
                  <Activity className="h-3.5 w-3.5 animate-pulse" />
                  <span className="tracking-widest uppercase">{platform.highlight}</span>
                </div>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-army-dark bg-army-gold hover:bg-army-gold-hover transition-all duration-300 rounded-sm"
                >
                  <span>{platform.actionText}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
