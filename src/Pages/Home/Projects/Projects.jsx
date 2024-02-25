import { useEffect } from 'react';
import { useScrollVisibility } from '../../../hooks/useScrollVisibility';
import './Projects.css'
import { projectWatch } from '../../../assets/images'

export default function Projects() {
 
  const [aboutRef, isVisible] = useScrollVisibility();

  useEffect(() => {
    const handleClassChange = () => {
      const body = document.querySelector('body'); 
      if (isVisible) {
        body.classList.add('background-color-change'); // Add a class to change background color
      } else {
        body.classList.remove('background-color-change'); // Remove the class
      }
    };

    handleClassChange(); // Call once on component mount
  }, [isVisible]);

  return (
    <div ref={aboutRef} className={`project_mainContainer ${isVisible ? 'appear-transition' : ''}`}>
      <div className='project_titleSection'>
        <h2>projects</h2>
        <hr/>
      </div>

      <div className='project_1'>
        <div className='project_1_image'>
          <img src={projectWatch} alt="image of the first portfolio project" />
        </div>
        <div className='project_1_data'>
          <h3>WatchTogether</h3>
          <h5>Project description comes here, implementation, basic detaisl</h5>
          <button>View Case Study</button>
        </div>
      </div>
      
    </div>
  );
}




