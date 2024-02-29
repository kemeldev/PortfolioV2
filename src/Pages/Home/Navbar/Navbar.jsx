import { useState } from 'react'
import { closeX,linkedIn,githubLogo } from '../../../assets/icons'
import './Navbar.css'
import {motion, AnimatePresence } from 'framer-motion'
import MagneticBtn from '../../../componets/MagneticBtn';

export default function Navbar   () {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection= (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }

  const menuVars = {
    initial: { scaleX: 0, borderRadius: '50%' },
    animate: { 
      scaleX: 1, 
      borderRadius: ['0%', '50%', '50%', '50%', '50%', '0%'],
      transition: {
        duration: 0.6,
        ease: [0.12, 0, 0.37, 0],
        times: [0, 0.4, 0.6, 0.7, 0.9, 1], 
        bezier: [.79, .38, 1, .58]
        
      }
    },
    exit: { scaleX: 0, borderRadius: '100%', transition: {
      duration: 0.8,
      ease: [0.22, 0, 0.36, 0],
    }},
  };

  return (
    <>
      <nav className='navbar_mainContainer'>
        <h3>Kevin Bolanos</h3>

        <ul className='navbar_list'>
          <li onClick={() => scrollToSection('projects')}><MagneticBtn buttonText={"Projects"} /></li>
          <li onClick={() => scrollToSection('about')}><MagneticBtn buttonText={"About"} /></li>
          <li onClick={() => scrollToSection('contact')}><MagneticBtn buttonText={"Contact"} /></li>
        </ul>

        <div className='navbar_menuBtn' onClick={() => setMenuOpen(prevstate => !prevstate)}>
          <h3><MagneticBtn buttonText={"Menu"} /></h3>
        </div>

        <AnimatePresence>
          {menuOpen && (
          
          <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className='navbar_menuComponent'
            >
            <img 
              src={closeX}
              onClick={() => setMenuOpen(prevstate => !prevstate)}
              />
            <motion.ul variants={{ initial: { x: '-100%' }, animate: { x: 0 } }} className='navbar_menuComponent_list'>
                  <h4>Navigation</h4>
                  <hr />
                  <li>Projects</li>
                  <li>About</li>
                  <li>Contact</li>
                  <h4>Social</h4>
                  <hr />
                  <div className="navbar_menuLogo_linkedIn">
                    <img src={githubLogo}/>
                  </div>
                  <div className="navbar_menuLogo_git">
                    <img src={linkedIn}/>
                  </div>
                  
              </motion.ul>
          </motion.div>
          )}
        </AnimatePresence>


      </nav>


      
    </>
  )
}