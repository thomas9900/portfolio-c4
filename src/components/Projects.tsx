import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.scss';
import { useState } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  linkedinUrl?: string;
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects: ProjectItem[] = [

    {
      id: 1,
      title: 'Soov',
      category: 'Classifieds Marketplace',
      description: 'Estonia’s leading classifieds platform for buying and selling vehicles, real estate, electronics, and more. Features advanced search, category browsing, and a user-friendly interface.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'SCSS', 'WordPress', 'jQuery', 'Bootstrap'],
      liveUrl: 'https://soov.ee',
      image: '/src/assets/img/soov-scrn.png',
      featured: true,
    },
    {
      id: 8,
      title: 'Saaremaa Museum (SAMU)',
      category: 'Museum Website',
      description: 'Official website for Saaremaa Museum, one of Estonia’s largest and most prominent museums. The site provides information about exhibitions, events, educational programs, and the museum’s history, as well as visitor information and digital resources.',
      technologies: ['JavaScript', 'SCSS', 'WordPress', 'PHP', 'MySQL'],
      liveUrl: 'https://samu.ee',
      image: '/src/assets/img/samu-scrn.png',
      featured: true,
    },
    {
      id: 17,
      title: 'Metsaoksjon',
      category: 'Forestry Auction Platform',
      description: 'An online platform for forest owners and buyers to connect, list, and bid on forest properties and timber auctions in Estonia. Includes auction management and secure transactions.',
      technologies: ['MySQL', 'WordPress', 'PHP', 'JavaScript', 'SCSS'],
      image: '/src/assets/img/metsaoksjon-scrn.png',
      liveUrl: 'https://metsaoksjon.ee',
      featured: true,
    },
    {
      id: 0,
      title: 'Portfolio',
      category: 'Personal Portfolio',
      description: 'My personal portfolio website showcasing my projects, skills, and experience. Built with modern web technologies featuring responsive design, smooth animations, and a clean user interface.',
      technologies: ['React', 'TypeScript', 'SCSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://thomas-soolaid.netlify.app',
      image: '/src/assets/img/portfolio-scrn.png',
      featured: true,
      githubUrl: 'https://github.com/thomas9900/portfolio-c4',
    },
    {
      id: 11,
      title: 'ELK',
      category: 'Literary Magazine',
      description: 'The Estonian Literary Magazine (ELK) is a publication dedicated to Estonian literature, featuring articles, interviews, and literary reviews. The website offers digital access to current and past issues.',
      technologies: ['SCSS', 'WordPress', 'PHP', 'MySQL', 'JavaScript'],
      image: '/src/assets/img/elk-scrn.png',
      liveUrl: 'https://elk.ee',
      featured: true,
    },
    {
      id: 12,
      title: 'Zeroest',
      category: 'Sustainability Platform',
      description: 'A platform dedicated to promoting zero-waste and sustainable living in Estonia. Features articles, guides, and a directory of eco-friendly businesses and events.',
      technologies: ['MySQL', 'JavaScript', 'SCSS', 'WordPress', 'PHP'],
      image: '/src/assets/img/zeroest-scrn.png',
      liveUrl: 'https://zeroest.ee',
      featured: true,
    },
    {
      id: 10,
      title: 'Teater.ee',
      category: 'Theatre Portal',
      description: 'Estonia’s central portal for theatre information, ticket sales, and news. Features event listings, theatre company profiles, and a modern event calendar.',
      technologies: ['SCSS', 'WordPress', 'PHP', 'MySQL', 'JavaScript'],
      image: '/src/assets/img/teater-scrn.png',
      liveUrl: 'https://teater.ee',
      featured: false,
    },
    {
      id: 13,
      title: 'Bangbonsomer',
      category: 'Music Band Website',
      description: 'Official website for the Estonian band Bangbonsomer. Features music releases, event information, media gallery, and contact details.',
      technologies: ['PHP', 'WordPress', 'MySQL', 'JavaScript', 'SCSS', 'jQuery', 'Bootstrap'],
      image: '/src/assets/img/bangbonsomer-scrn.png',
      liveUrl: 'https://bangbonsomer.ee',
      featured: false,
    },
    {
      id: 14,
      title: 'Õpetajate Leht (Opleht)',
      category: 'Education News Portal',
      description: 'Õpetajate Leht is Estonia’s leading education news portal, providing news, articles, and resources for teachers and education professionals.',
      technologies: ['JavaScript', 'SCSS', 'WordPress', 'PHP', 'MySQL'],
      image: '/src/assets/img/opleht-scrn.png',
      liveUrl: 'https://opleht.ee',
      featured: false,
    },
    {
      id: 15,
      title: 'Loominguraamatukogu',
      category: 'Literary Series Website',
      description: 'Website for the Loominguraamatukogu literary series, featuring book listings, author information, and news about new releases in Estonian literature.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'SCSS'],
      image: '/src/assets/img/loominguraamatukogu-scrn.png',
      liveUrl: 'https://loominguraamatukogu.ee',
      featured: false,
    },
    {
      id: 16,
      title: 'Sirp',
      category: 'Cultural Newspaper',
      description: 'Sirp is Estonia’s leading cultural newspaper, covering arts, literature, science, and social issues. The website features articles, interviews, and event information.',
      technologies: ['SCSS', 'WordPress', 'PHP', 'MySQL', 'JavaScript'],
      image: '/src/assets/img/sirp-scrn.png',
      liveUrl: 'https://sirp.ee',
      featured: false,
    },
    {
      id: 9,
      title: 'Loodusmaja',
      category: 'Nature Education Center',
      description: 'Loodusmaja is a nature education center in Estonia, offering educational programs, workshops, and resources for students and teachers. The website provides information about events and activities.',
      technologies: ['SCSS', 'WordPress', 'PHP', 'MySQL', 'JavaScript'],
      image: '/src/assets/img/loodusmaja-scrn.png',
      liveUrl: 'https://agrofond.ee/loodusmaja',
      featured: false,
    }
  ];

  const VISIBLE_COUNT = 6;
  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="projects__title">Projects</h2>
          <p className="projects__subtitle">
            A collection of my recent projects showcasing my skills and passion for development
          </p>
        </motion.div>

        <div className="projects__list">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`projects__item${project.featured ? ' projects__item--featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="projects__card">
                {project.image && (
                  <div className="projects__image">
                    <img src={project.image} alt={`${project.title} screenshot`} />
                  </div>
                )}
                <div className="projects__header-content">
                  <div className="projects__title-section">
                    <h3 className="projects__job-title">{project.title}</h3>
                    <div className="projects__company">
                      <span className="projects__company-name">{project.category}</span>
                      {project.featured && (
                        <span className="projects__featured-badge">Featured</span>
                      )}
                    </div>
                  </div>
                  <div className="projects__meta">
                    <div className="projects__project-links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects__link projects__link--github"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects__link projects__link--live"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="projects__content">
                  <p className="projects__description">{project.description}</p>
                  <div className="projects__technologies">
                    <h4 className="projects__tech-title">Technologies:</h4>
                    <div className="projects__tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="projects__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {projects.length > VISIBLE_COUNT && (
          <div className="projects__show-more">
            <button className="btn btn--secondary" onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 