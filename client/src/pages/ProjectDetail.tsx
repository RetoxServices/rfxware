import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/lib/framer-animations";

interface ProjectDetailProps {
  params?: {
    id: string;
  };
}

// This would typically come from an API or database
const projectData = {
  "1": {
    title: "Rust External",
    description: "A high quality external Rust Cheat.",
    videoId: "dQw4w9WgXcQ", // Example YouTube video ID
    features: [
      "Memory Reading/Writing",
      "Player and Prefab ESP",
      "Player Exploits",
      "Material Chams (through walls)"
    ],
    technologies: ["C++", "ImGui", "IDA", "VS2022"],
    longDescription: `
      Our Rust External Cheat deliveres a wide variate of features, 
      including an indepth Player ESP with name,distance,weapon and their 
      current Team. 
      
      You can mark Players as friends(8) or as enemies(9) or just let them be 
      automaticly assigned if they are in your team.
      You are able to see the enemies hotbar and predict their next move.
      
      Finding Materials and Crates was never easier with our World ESP.
      U can see every Item dropped so you never miss an weapon on the floor again.
      
    `
  },
  "2": {
    title: "Neural Canvas",
    description: "AI-powered creative suite for generating and editing artwork.",
    videoId: "dQw4w9WgXcQ", // Example YouTube video ID
    features: [
      "AI image generation from text prompts",
      "Style transfer algorithms",
      "Advanced editing tools",
      "Cloud storage and sharing"
    ],
    technologies: ["Python", "TensorFlow", "React", "WebGL", "Flask"],
    longDescription: `
      Neural Canvas harnesses the power of deep learning to transform text prompts 
      into stunning visual artwork. This creative suite enables artists, designers, 
      and creators to explore new creative possibilities without technical barriers.
      
      The core technology utilizes a custom-trained diffusion model that generates
      high-quality images from textual descriptions. Users can further refine these
      images with an intuitive interface that provides fine-grained control over
      the generation process.
      
      The application features a React-based frontend with WebGL acceleration for
      smooth interactions, while the backend leverages Python and TensorFlow for
      the AI components, all orchestrated through a Flask API layer.
    `
  },
  "3": {
    title: "Void Nexus",
    description: "A real-time multiplayer space strategy game with procedural universe.",
    videoId: "dQw4w9WgXcQ", // Example YouTube video ID
    features: [
      "Procedurally generated galaxy",
      "Real-time multiplayer combat",
      "Dynamic economy system",
      "Cross-platform gameplay"
    ],
    technologies: ["Unity", "C#", "Photon", "Procedural Generation"],
    longDescription: `
      Void Nexus is an ambitious multiplayer space strategy game set in a vast,
      procedurally generated universe where players can explore, build, trade, and
      engage in epic space battles. The game features a unique blend of real-time
      strategy and persistent world elements.
      
      Built with Unity and C#, the game utilizes advanced procedural generation
      techniques to create a diverse and ever-expanding universe filled with
      planets, asteroids, space stations, and other cosmic phenomena. Each
      playthrough offers a unique experience with different star systems and
      planetary configurations.
      
      The multiplayer functionality is powered by Photon, enabling seamless
      real-time interactions between players across different regions. The game
      also features a sophisticated AI system for non-player civilizations that
      evolve and respond to player actions.
    `
  }
};

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const [, setLocation] = useLocation();
  const projectId = params?.id || "1";
  const project = projectData[projectId as keyof typeof projectData];
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <Button 
            onClick={() => setLocation("/")}
            className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-md"
          >
            Return to Home
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Button 
          onClick={() => setLocation("/")}
          variant="ghost" 
          className="mb-8 text-gray-400 hover:text-accent"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Projects
        </Button>
        
        <motion.div 
          className="grid md:grid-cols-5 gap-12"
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
        >
          {/* Video and main content - 3/5 width on desktop */}
          <div className="md:col-span-3 space-y-8">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-white">{project.title}</h1>
              <p className="mt-4 text-gray-300 text-lg">{project.description}</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">About This Project</h2>
              <div className="text-gray-300 space-y-4 whitespace-pre-line">
                {project.longDescription}
              </div>
            </div>
          </div>
          
          {/* Sidebar content - 2/5 width on desktop */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <i className="fas fa-link mr-2 text-primary"></i> Related Links
              </h2>
              <div className="space-y-3">
                <a 
                   href="https://discord.gg/rfxware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary transition-colors"
                >
                  <i className="fab fa-github mr-2"></i> Visit our Github(soon)
                </a>
                <a 
                  href="https://discord.gg/rfxware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary transition-colors"
                >
                  <i className="fas fa-book mr-2"></i> Documentation (soon)
                </a>
                <a 
                  href="https://discord.gg/rfxware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary transition-colors"
                >
                  <i className="fab fa-discord mr-2"></i> Join Discussion
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
