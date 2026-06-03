"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, Filter, Target } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "operations" | "training" | "media";
  image: string;
  date: string;
  location: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Operation Iron Vanguard",
    category: "operations",
    image: "/sam-britsh-army/images/roblox_military_op.png",
    date: "08 APR 2026",
    location: "Sector B - Roblox Training Hub",
    description: "Recruits executing standard tactical maneuvers and building clearance procedures under direct command of Captain Sam.",
  },
  {
    id: 2,
    title: "Grenadier Guard Drill",
    category: "training",
    image: "/sam-britsh-army/images/training_exercise.png",
    date: "14 MAR 2026",
    location: "Sandhurst Training Academy",
    description: "Squad members standing in perfect formation during the weekly ceremonial drill inspection and rank review.",
  },
  {
    id: 3,
    title: "Official Recruitment Directive",
    category: "media",
    image: "/sam-britsh-army/images/recruitment_poster.png",
    date: "01 JAN 2026",
    location: "HQ Communications Desk",
    description: "Official community recruitment poster shared on X and Discord to mobilize fresh recruits for active regiments.",
  },
  {
    id: 4,
    title: "Desert Reconnaissance Patrol",
    category: "operations",
    image: "/sam-britsh-army/images/hero_banner.png",
    date: "22 FEB 2026",
    location: "Outpost Mirage",
    description: "Elite units conducting long-range reconnaissance patrols to secure boundaries against adversarial clans.",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "operations" | "training" | "media">("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section id="gallery" className="py-24 bg-army-dark relative overflow-hidden">
      {/* Background visual indicators */}
      <div className="absolute top-10 left-10 w-96 h-96 border border-army-gold/2 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-army-gold font-mono block">
              [ VISUAL TELEMETRY / IMAGES ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
              Operations Gallery
            </h2>
          </div>

          {/* Filters tabs */}
          <div className="flex flex-wrap gap-2">
            {(["all", "operations", "training", "media"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-widest border transition-all duration-300 rounded-sm ${
                  filter === cat
                    ? "bg-army-gold text-army-dark border-army-gold font-black"
                    : "bg-army-panel/40 border-army-border text-gray-300 hover:text-white hover:border-army-gold/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer overflow-hidden border border-army-border hover:border-army-gold/50 transition-all duration-300 bg-army-panel/20 tactical-corner"
              >
                {/* Photo frame */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Photo Overlay hover action */}
                  <div className="absolute inset-0 bg-army-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-army-gold/10 border border-army-gold rounded-full text-army-gold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Corner tag */}
                  <span className="absolute top-4 left-4 px-2 py-0.5 bg-army-dark/85 border border-army-border text-[9px] font-mono text-army-gold tracking-widest uppercase rounded-sm">
                    {item.category}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-6 space-y-2 border-t border-army-border">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-army-gold">{item.date}</span>
                    <span className="text-[10px] font-mono text-gray-500">{item.location}</span>
                  </div>
                  <h3 className="text-white font-extrabold text-lg uppercase tracking-wide group-hover:text-army-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lighbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-army-dark/95 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-army-panel border border-army-border rounded-sm max-w-4xl w-full overflow-hidden relative tactical-corner"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-army-dark/80 border border-army-border text-gray-400 hover:text-army-gold hover:border-army-gold transition-all duration-200 z-10 rounded-sm"
                  aria-label="Close dialog"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Photo area */}
                  <div className="lg:col-span-8 relative aspect-video bg-black flex items-center">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Details area */}
                  <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 lg:border-l border-army-border">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 bg-army-green border border-army-border text-[9px] font-mono text-army-gold tracking-widest uppercase rounded-sm">
                          {selectedItem.category}
                        </span>
                        <span className="text-[10px] font-mono text-army-gold">{selectedItem.date}</span>
                      </div>

                      <h3 className="text-white font-extrabold text-xl uppercase tracking-wide">
                        {selectedItem.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-army-border">
                      <div className="flex flex-col space-y-1">
                        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                          LOCATION COORDINATES
                        </span>
                        <span className="text-xs font-mono text-gray-300">
                          {selectedItem.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-[10px] font-mono text-army-gold">
                        <Target className="h-3.5 w-3.5" />
                        <span className="tracking-widest uppercase">ENCRYPTED TELEMETRY VERIFIED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
