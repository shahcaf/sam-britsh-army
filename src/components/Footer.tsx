import { Shield, MessageSquare, Users } from "lucide-react";

// Custom TikTok icon since Lucide doesn't have it by default
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

export default function Footer() {
  return (
    <footer id="footer" className="bg-army-dark border-t border-army-border relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 tactical-grid pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-army-gold" />
              <span className="font-sans font-extrabold tracking-wider text-lg uppercase text-white">
                SAM'S BA
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              A premier Roblox military roleplay and gaming community. Dedicated to building leadership, teamwork, and immersive military experiences. Join our ranks today.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://discord.gg/b7EbjWXqx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-army-panel hover:bg-army-panel-hover text-gray-400 hover:text-army-gold border border-army-border hover:border-army-border-active transition-all duration-300 rounded-sm"
                aria-label="Discord Server"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a
                href="https://www.roblox.com/share/g/35566756"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-army-panel hover:bg-army-panel-hover text-gray-400 hover:text-army-gold border border-army-border hover:border-army-border-active transition-all duration-300 rounded-sm"
                aria-label="Roblox Group"
              >
                <RobloxIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@samsbritisharmy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-army-panel hover:bg-army-panel-hover text-gray-400 hover:text-army-gold border border-army-border hover:border-army-border-active transition-all duration-300 rounded-sm"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/samsbritisharmy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-army-panel hover:bg-army-panel-hover text-gray-400 hover:text-army-gold border border-army-border hover:border-army-border-active transition-all duration-300 rounded-sm"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-army-gold pl-2 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-army-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-army-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#socials" className="hover:text-army-gold transition-colors">
                  Social Channels
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-army-gold transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-army-gold transition-colors">
                  Operations
                </a>
              </li>
            </ul>
          </div>

          {/* Enlist Column */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-army-gold pl-2 mb-4">
              Enlistment
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#recruitment" className="hover:text-army-gold transition-colors">
                  How to Join
                </a>
              </li>
              <li>
                <a href="https://discord.gg/b7EbjWXqx" target="_blank" rel="noopener noreferrer" className="hover:text-army-gold transition-colors">
                  Discord Application
                </a>
              </li>
              <li>
                <a href="https://www.roblox.com/share/g/35566756" target="_blank" rel="noopener noreferrer" className="hover:text-army-gold transition-colors">
                  Roblox Registry
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider line with tactical pulse dot */}
        <div className="relative my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-army-border to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-army-dark px-4 flex items-center space-x-1.5">
            <span className="military-glow-dot animate-pulse-slow" />
            <span className="text-[10px] tracking-widest text-army-gold uppercase font-mono">
              SBA.SYS.SEC_1
            </span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 leading-relaxed text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Sam's British Army Community. All Rights Reserved.
          </p>
          <p className="max-w-md md:text-right italic">
            Disclaimer: This is a Roblox roleplay community website. We are not affiliated with, endorsed by, or representing the actual British Armed Forces, His Majesty's Armed Forces, or the UK Ministry of Defence.
          </p>
        </div>
      </div>
    </footer>
  );
}
