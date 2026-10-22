import dynamic from "next/dynamic";
import Intro from "@/components/sections/Intro";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import TapeMarquee from "@/components/sections/TapeMarquee";
import SolutionsBento from "@/components/sections/SolutionsBento";
import Workflow from "@/components/sections/Workflow";
import Sandbox from "@/components/sections/Sandbox";
import Industries from "@/components/sections/Industries";
import Partners from "@/components/sections/Partners";
import EcoTicker from "@/components/sections/EcoTicker";
import Journey from "@/components/sections/Journey";
import TechStrip from "@/components/sections/TechStrip";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CursorDot from "@/components/ui/CursorDot";

const AgentField = dynamic(() => import("@/components/canvas/AgentField"));

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-body focus:font-medium focus:text-paper"
      >
        Tới nội dung chính
      </a>
      <Intro />
      <AgentField />
      <CursorDot />
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <TapeMarquee />
        <SolutionsBento />
        <Partners />
        <EcoTicker />
        <Workflow />
        <Sandbox />
        <Industries />
        <Journey />
        <TechStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
