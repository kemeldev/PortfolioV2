import { useEffect } from 'react';
import { useScrollVisibility } from '../../../hooks/useScrollVisibility';
import './Projects.css'
import { projectConstruction, projectEcommerce, projectWatch } from '../../../assets/images'

export default function Projects() {
 
  const [projectRef, isVisible] = useScrollVisibility();
  const [project2, isProject2Visible] = useScrollVisibility();
  const [project3, isProject3Visible] = useScrollVisibility();

  useEffect(() => {
    const handleClassChange = () => {
      const body = document.querySelector('body'); 
      if (isVisible) {
        body.classList.add('background-color-change-projects'); // Add a class to change background color
      } else {
        body.classList.remove('background-color-change-projects'); // Remove the class
      }
      if (isProject2Visible) {
        body.classList.add('background-color-change-project2'); 
      } else {
        body.classList.remove('background-color-change-project2');
      }

      if (isProject3Visible) {
        body.classList.add('background-color-change-project3'); 
      } else {
        body.classList.remove('background-color-change-project3');
      }
    };

    handleClassChange(); // Call once on component mount
  }, [isVisible, isProject2Visible, isProject3Visible]);

  return (
    <div ref={projectRef} className={`project_mainContainer ${isVisible ? 'appear-transition' : ''}`}>
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

      <div ref={project2} className='project_2'>
        <div className='project_2_image'>
          <img src={projectConstruction} alt="image of the second portfolio project" />
        </div>
        <div className='project_2_data'>
          <h3>Construction Site</h3>
          <h5>Project description comes here, implementation, basic detaisl</h5>
          <button>View Case Study</button>
        </div>
      </div>

      <div ref={project3} className='project_2'>
        <div className='project_2_image'>
          <img src={projectEcommerce} alt="image of the third portfolio project" />
        </div>
        <div className='project_2_data'>
          <h3>Construction Site</h3>
          <h5>Project description comes here, implementation, basic detaisl</h5>
          <button>View Case Study</button>
        </div>
      </div>
      
    </div>
  );
}




