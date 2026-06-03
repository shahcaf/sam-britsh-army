import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import SocialPlatforms from "@/components/SocialPlatforms";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Recruitment from "@/components/Recruitment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-army-dark flex flex-col font-sans antialiased text-gray-200">
      {/* Immersive background tactical overlay lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-army-panel/40 via-transparent to-transparent pointer-events-none z-0" />
      
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Core Content Sections */}
      <main className="flex-grow z-10 relative">
        <Hero />
        <About />
        <Stats />
        <SocialPlatforms />
        <Timeline />
        <Gallery />
        <Testimonials />
        <Recruitment />
      </main>

      {/* Community Footer */}
      <Footer />
    </div>
  );
}
