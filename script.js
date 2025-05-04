// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Project data for the detailed view
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
      longDescription: `Neural Canvas harnesses the power of deep learning to transform text prompts 
        into stunning visual artwork. This creative suite enables artists, designers, 
        and creators to explore new creative possibilities without technical barriers.
        
        The core technology utilizes a custom-trained diffusion model that generates
        high-quality images from textual descriptions. Users can further refine these
        images with an intuitive interface that provides fine-grained control over
        the generation process.
        
        The application features a React-based frontend with WebGL acceleration for
        smooth interactions, while the backend leverages Python and TensorFlow for
        the AI components, all orchestrated through a Flask API layer.`
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
      longDescription: `Void Nexus is an ambitious multiplayer space strategy game set in a vast,
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
        evolve and respond to player actions.`
    }
  };

  // Nav Link Active State Handler
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  function updateActiveNavLink() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      
      if (href === currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  
  // Mobile Menu Toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileNav = document.querySelector('.mobile-nav');
  
  mobileMenuButton.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      const yOffset = -80; // Header height offset
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
      }
    });
  });
  
  // Project Modal Functionality
  const modal = document.getElementById('projectModal');
  const modalBackdrop = modal.querySelector('.modal-backdrop');
  const modalCloseBtn = modal.querySelector('.modal-close-btn');
  const modalBody = modal.querySelector('.modal-body');
  const projectCards = document.querySelectorAll('.project-card');
  const projectDetailLinks = document.querySelectorAll('.view-details-link');
  
  function openProjectModal(projectId) {
    const project = projectData[projectId];
    
    if (!project) return;
    
    // Build modal content
    let modalContent = `
      <div class="modal-header">
        <button class="back-button">
          <i class="fas fa-arrow-left"></i> Back to Projects
        </button>
      </div>
      
      <div class="project-detail-grid">
        <div class="project-main-content">
          <div class="project-video">
            <iframe
              src="https://www.youtube.com/embed/${project.videoId}"
              title="${project.title}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          
          <div class="project-intro">
            <h1 class="project-detail-title">${project.title}</h1>
            <p class="project-detail-description">${project.description}</p>
          </div>
          
          <div class="project-about">
            <h2 class="about-title">About This Project</h2>
            <div class="about-content">${project.longDescription}</div>
          </div>
        </div>
        
        <div class="project-sidebar">
          <div class="sidebar-card">
            <h2 class="about-title">Key Features</h2>
            <ul class="features-list">
              ${project.features.map(feature => `
                <li class="feature-item">
                  <span class="feature-icon"><i class="fas fa-check-circle"></i></span>
                  <span>${feature}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          
          <div class="sidebar-card">
            <h2 class="about-title">Technologies Used</h2>
            <div class="tech-tags">
              ${project.technologies.map(tech => `
                <span class="tag">${tech}</span>
              `).join('')}
            </div>
          </div>
          
          <div class="related-links">
            <h2 class="links-title">
              <i class="fas fa-link"></i> Related Links
            </h2>
            <div class="links-list">
              <a href="https://discord.gg/example" target="_blank" class="link-item">
                <i class="fab fa-github"></i> Visit out Github(soon)
              </a>
              <a href="https://discord.gg/example" target="_blank" class="link-item">
                <i class="fas fa-book"></i> Documentation(soon)
              </a>
              <a href="https://discord.gg/rfxware" target="_blank" class="link-item">
                <i class="fab fa-discord"></i> Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Set modal content and show modal
    modalBody.innerHTML = modalContent;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Add event listener to back button
    modalBody.querySelector('.back-button').addEventListener('click', closeProjectModal);
  }
  
  function closeProjectModal() {
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  // Add click event to project cards
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Prevent opening modal if click was on play button or its container
      if (e.target.closest('.play-button') || e.target.closest('.play-button-overlay')) {
        return;
      }
      
      const projectId = this.getAttribute('data-id');
      openProjectModal(projectId);
    });
  });
  
  // Add click event to "View Details" links
  projectDetailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent card click event
      
      const projectCard = this.closest('.project-card');
      const projectId = projectCard.getAttribute('data-id');
      openProjectModal(projectId);
    });
  });
  
  // Close modal when clicking on backdrop or close button
  modalBackdrop.addEventListener('click', closeProjectModal);
  modalCloseBtn.addEventListener('click', closeProjectModal);
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeProjectModal();
    }
  });
  
  // Add animation classes on scroll
  const animatedElements = document.querySelectorAll('.section-header, .project-card, .server-card, .contact-card');
  
  function animateOnScroll() {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animate');
      }
    });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once at page load
});
