import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import DiscordSection from "@/components/SocialsSection";
import Footer from "@/components/Footer";

// Import Font Awesome
const fontAwesomeScript = document.createElement("script");
fontAwesomeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js";
fontAwesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontAwesomeScript);

// Import Fonts
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// Set the document title
document.title = "DevPortal | Projects & Community";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Header height offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Add custom styles for the font families
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        --font-accent: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      }
      
      .font-sans {
        font-family: var(--font-sans);
      }
      
      .font-accent {
        font-family: var(--font-accent);
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .card-hover {
        transition: all 0.3s ease;
      }
      
      .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(147, 51, 234, 0.3);
      }
      
      .nav-link {
        position: relative;
      }
      
      .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: #10b981;
        transition: width 0.3s ease;
      }
      
      .nav-link:hover::after {
        width: 100%;
      }
      
      .active::after {
        width: 100%;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="bg-background text-foreground font-sans">
      <Header />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <ProjectsSection />
        <DiscordSection />
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Home;
