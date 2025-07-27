import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Thomas Soolaid
          </p>
          
          <div className="footer__section footer__section--right">
            <div className="footer__social">
              <a
                href="https://github.com/thomas9900"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-soolaid/?originalSubdomain=ee"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:thomas.soolaid@gmail.com"
                className="footer__social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 