import React, {
  ChangeEventHandler,
  FormEventHandler,
  useState,
  useEffect,
} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact({darkMode}) {
  // * Hooks
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);

  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.3, triggerOnce: true });

  // * Starts Animation in the right ViewPort
  useEffect(() => {
    inView && animation.start('animate');
  }, [animation, inView]);

  // * Variables
  const encode = (data) => {
    // ? I've set any type explicilty
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  const initialState = { name: '', email: '', subject: '', message: '' };
  const { name, email, subject, message } = formState;

  // * Event Handlers
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formState }),
      });
      setSuccess(true);
      setFormState(initialState); // * State is not clearing up!
    } catch (error) {
      console.error(error);
      setFailure(true);
    }
  };

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  // * Framer Animation
  const screenVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        when: 'beforeChildren',
      },
    },
  };
  const leftVariant = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const rightVariant = {
    initial: { y: 600, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section id="contact">
      <motion.form
        onSubmit={handleSubmit}
        ref={ref}
        variants={screenVariant}
        animate={animation}
        initial="initial"
      >
        {success && 'Thank you, form has been submitted!'}
        {failure && 'Sorry, Something went wrong!'}
        <div className="background">
          <div className={`container ${darkMode ? "dark" : ""}`}>
            <div className="screen dark:bg-red-800">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <motion.div
                  className="screen-body-item left"
                  variants={leftVariant}
                >
                  <div className="app-title">
                    <span>CONTACT</span>
                    <span>ME</span>
                  </div>
                  <div className="contact">
                    <p>Wanna work together? </p>
                    <p>Send me an email at </p>
                    <a href="mailto:dhandvaasu@gmail.com" className="email">
                      dhandvaasu@gmail.com
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="screen-body-item"
                  variants={rightVariant}
                >
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="NAME"
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="EMAIL"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="SUBJECT"
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="app-form-group message">
                      <textarea
                        className="app-form-control"
                        placeholder="MESSAGE"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button
                        className="app-form-button button-transparent"
                        type="button"
                        onClick={() => setFormState(initialState)}
                      >
                        CLEAR
                      </button>
                      <button
                        className="app-form-button button-purple"
                        type="submit"
                      >
                        SEND
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.form>
    </section>
  );
}