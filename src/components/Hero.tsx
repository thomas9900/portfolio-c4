import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Hero.scss';
import profilePic from '../assets/img/profile-pic-cv.jpg';
import CV from '../assets/files/Thomas-Soolaid-Resume-2025.pdf';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const Hero = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__stars">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="hero__star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero__content">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero__title">
              <span className="gradient-text">Thomas Soolaid</span>
            </h1>
            <h2 className="hero__subtitle">Web Developer</h2>
            <p className="hero__description">
              Love creating stylish and awesome digital experiences<br />
            </p>
            
            <div className="hero__actions">
              <a href={CV} className="btn btn--primary" download>
                Download CV
              </a>
              <a href="#contact" className="btn btn--secondary">
                Get In Touch
              </a>
            </div>

            <div className="hero__social">
              <a
                href="https://github.com/thomas9900"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-soolaid/?originalSubdomain=ee"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:thomas.soolaid@gmail.com"
                className="hero__social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero__avatar">
              <div className="hero__avatar-inner">
                <img src={profilePic} alt="Profile" className="hero__avatar-img" />
              </div>
              <div className="hero__avatar-ring"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        className="hero__scroll-btn"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ y: 5 }}
        aria-label="Scroll to next section"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
};

export default Hero; 