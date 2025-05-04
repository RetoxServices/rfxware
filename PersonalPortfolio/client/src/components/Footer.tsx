import { motion } from "framer-motion";
import { fadeInAnimation } from "@/lib/framer-animations";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 py-12 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation}
        >
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold font-accent">
              <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">DevPortal</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">© {currentYear} All Rights Reserved</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <nav className="flex flex-wrap justify-center gap-8">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Home
              </a>
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Projects
              </a>
              <a 
                href="#discord" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("discord");
                }}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Discord
              </a>
              <a 
                href="https://example-shop.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-accent transition-colors"
              >
                Shop
              </a>
            </nav>
            
            <div className="flex space-x-4">
              <a 
                href="https://discord.gg/example" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Discord"
              >
                <i className="fab fa-discord text-lg"></i>
              </a>
              <a 
                href="https://github.com/example" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
