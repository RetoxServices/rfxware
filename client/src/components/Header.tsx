import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { navAnimation } from "@/lib/framer-animations";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: (href: string) => void;
  isExternal?: boolean;
}

const NavLink = ({ href, label, isActive, onClick, isExternal = false }: NavLinkProps) => {
  return (
    <a 
      href={href}
      onClick={(e) => {
        if (!isExternal) {
          e.preventDefault();
          onClick(href);
        }
      }}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`relative nav-link font-medium text-gray-300 hover:text-white ${isActive ? 'text-white' : ''}`}
    >
      {label}
      <span 
        className={`absolute bottom-[-2px] left-0 h-[2px] bg-accent transition-all duration-300 ease-in-out ${
          isActive ? 'w-full' : 'w-0'
        }`}
      />
    </a>
  );
};

const Header = () => {
  const [location, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Header height offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    } else if (href === "/shop") {
      setLocation(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (
          scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="text-2xl font-bold font-accent text-white flex items-center gap-2"
          initial="hidden"
          animate="visible"
          variants={navAnimation}
        >
          <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">DevPortal</span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          initial="hidden"
          animate="visible"
          variants={navAnimation}
        >
          <NavLink 
            href="#home" 
            label="Home" 
            isActive={activeSection === "home"} 
            onClick={handleNavClick} 
          />
          <NavLink 
            href="#projects" 
            label="Projects" 
            isActive={activeSection === "projects"} 
            onClick={handleNavClick} 
          />
          <NavLink 
            href="#discord" 
            label="Discord" 
            isActive={activeSection === "discord"} 
            onClick={handleNavClick} 
          />
          <Button 
            onClick={() => setLocation("/shop")}
            className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2 rounded-md font-medium hover:shadow-lg transition-all"
          >
            Shop
          </Button>
        </motion.nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            <i className="fas fa-bars text-xl"></i>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-gray-900 shadow-lg absolute w-full ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6 py-3 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="text-gray-300 hover:text-white font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            Home
          </a>
          <a 
            href="#projects" 
            className="text-gray-300 hover:text-white font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#projects");
            }}
          >
            Projects
          </a>
          <a 
            href="#discord" 
            className="text-gray-300 hover:text-white font-medium py-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#discord");
            }}
          >
            Discord
          </a>
          <Button 
            onClick={() => {
              setLocation("/shop");
              setMobileMenuOpen(false);
            }}
            className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2 rounded-md font-medium text-center"
          >
            Shop
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
