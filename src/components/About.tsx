import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaCss3Alt, 
  FaWordpress, 
  FaFire, 
  FaGitAlt, 
  FaWindows, 
  FaApple, 
  FaUbuntu, 
  FaBootstrap, 
  FaBitbucket, 
  FaGithub, 
  FaGitlab, 
  FaRobot, 
  FaGem 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiCypress, 
  SiWebpack,
  SiPostman,
  SiJquery,
  SiElementor,
  SiFigma,
  SiAdobephotoshop,
  SiAdobe,
  SiJira,
  SiTrello,
  SiAtlassian,
  SiVite,
  SiCucumber,
  SiPhp,
  SiOpenai
} from 'react-icons/si';
import '../styles/About.scss';

const About = () => {
  const technologyCategories = [
    {
      category: 'Operating Systems',
      items: [
        { name: 'Windows', icon: <FaWindows size={24} />, color: '#0078D6' },
        { name: 'Mac', icon: <FaApple size={24} />, color: '#A2AAAD' },
        { name: 'Ubuntu', icon: <FaUbuntu size={24} />, color: '#E95420' },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: <FaReact size={24} />, color: '#61DAFB' },
        { name: 'TypeScript', icon: <SiTypescript size={24} />, color: '#3178C6' },
        { name: 'JavaScript', icon: <FaJs size={24} />, color: '#F7DF1E' },
        { name: 'SCSS/CSS', icon: <FaCss3Alt size={24} />, color: '#CC6699' },
        { name: 'Vite', icon: <SiVite size={24} />, color: '#646CFF' },
        { name: 'jQuery', icon: <SiJquery size={24} />, color: '#0769AD' },
        { name: 'Material UI', icon: <FaCss3Alt size={24} />, color: '#0081CB' },
        { name: 'Bootstrap', icon: <FaBootstrap size={24} />, color: '#7952B3' },
      ],
    },
    {
      category: 'Backend & Tools',
      items: [
        { name: 'Firebase', icon: <FaFire size={24} />, color: '#FFCA28' },
        { name: 'Webpack', icon: <SiWebpack size={24} />, color: '#8DD6F9' },
        { name: 'PHP', icon: <SiPhp size={24} />, color: '#777BB4' },
      ],
    },
    {
      category: 'CMS & Page Builders',
      items: [
        { name: 'WordPress', icon: <FaWordpress size={24} />, color: '#21759B' },
        { name: 'Elementor', icon: <SiElementor size={24} />, color: '#92003B' },
      ],
    },
    {
      category: 'QA & Testing',
      items: [
        { name: 'Cypress', icon: <SiCypress size={24} />, color: '#808080' },
        { name: 'Postman', icon: <SiPostman size={24} />, color: '#FF6C37' },
        { name: 'Cucumber', icon: <SiCucumber size={24} />, color: '#23D96C' },
      ],
    },
    {
      category: 'Version Control & Collaboration',
      items: [
        { name: 'Git', icon: <FaGitAlt size={24} />, color: '#F05032' },
        { name: 'Bitbucket', icon: <FaBitbucket size={24} />, color: '#0052CC' },
        { name: 'GitHub', icon: <FaGithub size={24} />, color: '#d1d5db' },
        { name: 'GitLab', icon: <FaGitlab size={24} />, color: '#FC6D26' },
      ],
    },
    {
      category: 'Design & Prototyping',
      items: [
        { name: 'Figma', icon: <SiFigma size={24} />, color: '#F24E1E' },
        { name: 'Photoshop', icon: <SiAdobephotoshop size={24} />, color: '#31A8FF' },
        { name: 'Adobe', icon: <SiAdobe size={24} />, color: '#FF0000' },
      ],
    },
    {
      category: 'Project Management',
      items: [
        { name: 'Jira', icon: <SiJira size={24} />, color: '#0052CC' },
        { name: 'Atlassian', icon: <SiAtlassian size={24} />, color: '#0052CC' },
        { name: 'Trello', icon: <SiTrello size={24} />, color: '#0052CC' },
      ],
    },
    {
      category: 'AI & Coding Assistants',
      items: [
        { name: 'ChatGPT', icon: <SiOpenai size={24} />, color: '#10A37F' },
        { name: 'GitHub Copilot', icon: <FaGithub size={24} />, color: '#10A37F' },
        { name: 'Grok', icon: <FaRobot size={24} />, color: '#8B5CF6' },
        { name: 'DeepSeek', icon: <FaRobot size={24} />, color: '#0EA5E9' },
        { name: 'Cursor', icon: <FaGem size={24} />, color: '#00D4FF' },
      ],
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="about__title">About Me</h2>
          <p className="about__subtitle">
                I have a strong focus on UI/UX, making sure designs are not just beautiful but also easy to use. 
                I work with modern frontend technologies to bring ideas to life with clean and efficient code.
          </p>
          <p className="about__subtitle">
                Beyond development, I have experience in QA engineering, sales, and HR management, which has helped me sharpen my attention to detail, 
                problem-solving and, communication skills.
          </p>
        </motion.div>

        <div className="about__content">
          <motion.div
            className="about__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>

        <motion.div
          className="about__skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about__card">
            <h3 className="about__card-title">Skills & Technologies</h3>
            {technologyCategories.map((cat) => (
              <div key={cat.category} style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', fontWeight: 600 }}>{cat.category}</h4>
                <div className="about__skills-grid">
                  {cat.items.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="about__skill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="about__skill-icon" style={{ color: tech.color }}>
                        {tech.icon}
                      </div>
                      <span className="about__skill-name">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 