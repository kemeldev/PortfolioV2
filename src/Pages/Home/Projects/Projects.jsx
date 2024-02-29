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
          <h6>Project description comes here, implementation, basic detaisl</h6>
          <div className='project_btns'>
            <button>Source Code</button>
            <button>Visit Site</button>
          </div>
          <h5>The project is a responsive Single Page Application (SPA) that handles different routes, consumes and dynamically handles data from The Movie Database API, and persists a list created by the user.</h5>
          
          
        </div>
      </div>

      <div ref={project2} className='project_2'>
        
        <div className='project_2_data large'>
          <h3>Construction Site</h3>
          <h6>Project description comes here, implementation, basic detaisl</h6>
          <div className='project_btns'>
            <button>Source Code</button>
            <button>Visit Site</button>
          </div>
          <h5>The multilanguage real landing page is used to showcase my previous work and projects as a former civil engineer. It incorporates a form to allow potential clients to communicate.</h5>
        </div>

        <div className='project_2_image'>
          <img src={projectConstruction} alt="image of the second portfolio project" />
        </div>

        <div className='project_2_data small'>
          <h3>Construction Site</h3>
          <h6>Project description comes here, implementation, basic detaisl</h6>
          <div className='project_btns'>
            <button>Source Code</button>
            <button>Visit Site</button>
          </div>
          <h5>The multilanguage real landing page is used to showcase my previous work and projects as a former civil engineer. It incorporates a form to allow potential clients to communicate.</h5>
        </div>

      </div>

      <div ref={project3} className='project_3'>

        <div className='project_3_image'>
          <img src={projectEcommerce} alt="image of the third portfolio project" />
        </div>
        <div className='project_3_data'>
          <h3>Ecommerce-Site</h3>
          <h6>Love shoes? Our store offers a wide range of options for you: tennis, football, outdoors, and more! Create your account now and get a discount on your next purchase.</h6>
          <div className='project_btns'>
            <button>Source Code</button>
            <button>Visit Site</button>
          </div>
          <h5>Project description goes here ove shoes? Our store offers a wide range of options for you: tennis, football, outdoors, and more! Create your account now and get a discount on your next purchase</h5>
        </div>
      </div>
      
    </div>
  );
}




