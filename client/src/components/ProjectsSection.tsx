import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { 
  sectionTitleAnimation, 
  staggerContainer, 
  cardAnimation 
} from "@/lib/framer-animations";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Quantum Marketplace",
    description: "A next-gen digital marketplace with immersive 3D product previews.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    tags: ["React", "Three.js", "MongoDB"],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Example YouTube link
  },
  {
    id: 2,
    title: "Neural Canvas",
    description: "AI-powered creative suite for generating and editing artwork.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    tags: ["Python", "TensorFlow", "WebGL"],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Example YouTube link
  },
  {
    id: 3,
    title: "Void Nexus",
    description: "A real-time multiplayer space strategy game with procedural universe.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    tags: ["Unity", "C#", "Photon"],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Example YouTube link
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [, setLocation] = useLocation();

  const navigateToDetailPage = () => {
    setLocation(`/project/${project.id}`);
  };

  return (
    <motion.div 
      className="rounded-lg overflow-hidden shadow-lg group bg-gray-900 border border-gray-800 hover:border-accent/50 cursor-pointer"
      variants={cardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      onClick={navigateToDetailPage}
    >
      <div className="overflow-hidden aspect-video relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        {/* Video Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <a 
            href={project.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-primary/80 rounded-full flex items-center justify-center hover:bg-primary transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigating to detail page when clicking YouTube button
            }}
          >
            <i className="fas fa-play text-white"></i>
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-gray-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigateToDetailPage();
            }}
            className="inline-flex items-center text-primary hover:text-accent transition-colors"
          >
            <span className="mr-1">View Details</span>
            <i className="fas fa-arrow-right text-sm"></i>
          </button>
          
          <a 
            href={project.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-primary transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mr-1">Watch Demo</span>
            <i className="fas fa-external-link-alt text-sm"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionTitleAnimation}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Projects</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            A selection of my latest digital creations and experiments.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            variant="outline"
            className="border-2 border-accent text-accent px-6 py-3 rounded-md font-medium hover:bg-accent/10 transition-all"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
