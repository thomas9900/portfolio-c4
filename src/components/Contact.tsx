import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import '../styles/Contact.scss';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'thomas.soolaid@gmail.com',
      link: 'mailto:thomas.soolaid@gmail.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Tallinn, Estonia',
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__subtitle">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <div className="contact__content">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact__card">
              <h3 className="contact__card-title">Contact Information</h3>
              <div className="contact__info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact__info-item">
                    <div className="contact__info-icon">{info.icon}</div>
                    <div className="contact__info-content">
                      <h4 className="contact__info-title">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="contact__info-value contact__info-link"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact__info-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact__form-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="contact__card">
              <h3 className="contact__card-title">Send Message</h3>
              <form
                action="https://formspree.io/f/xoqpvabg"
                method="POST"
                className="contact__form"
              >
                <input type="hidden" name="_captcha" value="false" />
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name" className="contact__label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="contact__input"
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="email" className="contact__label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="contact__input"
                      required
                    />
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="contact__input"
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__textarea"
                    rows={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary contact__submit"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 