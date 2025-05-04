import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  heroContainerAnimation, 
  heroItemAnimation
} from "@/lib/framer-animations";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center bg-background relative">
      <div className="container mx-auto px-6 pb-16">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={heroContainerAnimation}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mt-2"
            variants={heroItemAnimation}
          >
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">DevPortal</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl text-gray-300 max-w-xl mx-auto"
            variants={heroItemAnimation}
          >
            A sleek showcase of projects and community connections
          </motion.p>
          <motion.div 
            className="mt-12 flex flex-wrap gap-4 justify-center"
            variants={heroItemAnimation}
          >
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-6 rounded-md font-medium hover:shadow-lg transition-all text-lg"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection("discord")}
              variant="outline"
              className="border-2 border-accent text-accent px-8 py-6 rounded-md font-medium hover:bg-accent/10 transition-all text-lg"
            >
              Join Discord
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0], 
            opacity: [1, 0.5, 1] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("projects")} 
            className="text-accent"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
