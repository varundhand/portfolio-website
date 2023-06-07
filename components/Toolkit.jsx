import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useViewport, Viewport as deviceTypes } from '../hooks/useViewport';
import { map, size } from 'lodash';
import HTML5 from '../public/svg/html5.svg';
import CSS3 from '../public/svg/css3.svg';
import SASS from '../public/svg/sass.svg';
import BOOTSTRAP from '../public/svg/bootstrap.svg';
import AMAZONAWS from '../public/svg/amazonaws.svg';
import ELIXIR from '../public/svg/elixir.svg';
import EXPRESS from '../public/svg/express.svg';
import GIT from '../public/svg/git.svg';
import GITHUB from '../public/svg/github.svg';
import REACT from '../public/svg/react.svg';
import REDUX from '../public/svg/redux.svg';
import GRAPHQL from '../public/svg/graphql.svg';
import JAVASCRIPT from '../public/svg/javascript.svg';
import MONGODB from '../public/svg/mongodb.svg';
import WEBPACK from '../public/svg/webpack.svg';
import NODE from '../public/svg/node.svg';
import TYPESCRIPT from '../public/svg/typescript.svg';
import VSCODE from '../public/svg/vscode.svg';
import TAILWIND from '../public/svg/tailwind.svg'
import DJANGO from '../public/svg/django.svg'
import PYTHON from '../public/svg/python.svg'


console.log(VSCODE);

export default function Toolkit({darkMode}) {
  const skills = {
    // ReArrange Skills
    HTML5,
    CSS3,
    SASS,
    BOOTSTRAP,
    TAILWIND,
    PYTHON,
    JAVASCRIPT,
    TYPESCRIPT,
    REACT,
    REDUX,
    DJANGO,
    GIT,
    GITHUB,
    VSCODE,
  };
  
  // * Hooks
  const animation = useAnimation();    
  const [ref, inView, entry] = useInView({ threshold: 0, triggerOnce: true });
  
  const deviceType = useViewport(); // * Returns the DeviceType Depending on the Width of Viewport

  // // * Removes and Adds Skills based on ViewPort Width
  // useEffect(() => {
  //   // console.log("Screen Size Changed!", {deviceType});
  //   let numOfSkillsRemoved;
  //   switch (deviceType) {
  //     case deviceTypes.DESKTOP:
  //       numOfSkillsRemoved = 2;
  //       break;
  //     case deviceTypes.WIDE:
  //       numOfSkillsRemoved = 2;
  //       break;
  //     case deviceTypes.PHABLET:
  //       numOfSkillsRemoved = 0;
  //       break;
  //     case deviceTypes.PHONE:
  //       numOfSkillsRemoved = 0;
  //       break;
  //     case deviceTypes.TABLET:
  //       numOfSkillsRemoved = 3;
  //       break;
  //     case deviceTypes.LAPTOP:
  //       numOfSkillsRemoved = 4;
  //       break;
  //     default:
  //       console.warn('Weird! Screen Size Switch in Default');
  //       numOfSkillsRemoved = 0;
  //       break;
  //     }
      
  //     // * Slice Skills Depending on Screen Size and Store it in State
  //     const slicedSkills = Object.fromEntries(
  //     Object.entries(skills).slice(0, size(skills) - numOfSkillsRemoved)
  //   );
  //   setSkillsToBeDisplayed(slicedSkills);
  // }, [useViewport()]);

  // * Starts Animation in the right ViewPort
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else {
      animation.start("initial");
    }
  }, [animation, inView]);

  // * Framer Animation
  const containerVariant = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
      
    },
  };
  const skillVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  
  return (
    <div className={darkMode ? 'dark' : ''} >
    <section id="toolkit" className="container">
      <motion.ul
        className="wrapper-skills"
        variants={containerVariant}
        animate={animation}
        ref={ref}
        initial="initial"
      >
        {map(skills, (Skill, key) => (
            <motion.li key={key} variants={skillVariant}>
              <Skill className={`${key.toLowerCase()}`} />
              <h3 className='dark:text-white'>{key}</h3>
            </motion.li>
        ))}
      </motion.ul>
    </section>
    </div>
  );
}