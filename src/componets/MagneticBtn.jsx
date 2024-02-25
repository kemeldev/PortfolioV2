import { useEffect } from 'react';
import { gsap, Power4 } from 'gsap';
import './Magnetic.css'

// eslint-disable-next-line react/prop-types
const MagneticBtn = ({ buttonText }) => {
  useEffect(() => {
    const magnets = document.querySelectorAll('.magnetic');
    const strength = 100;
    
    magnets.forEach((magnet) => {
      magnet.addEventListener('mousemove', moveMagnet);
      magnet.addEventListener('mouseout', function(event) {
        gsap.to(event.currentTarget, 10, { x: 0, y: 0, ease: Power4.easeOut });
      });
    });
    
    function moveMagnet(event) {
      const magnetButton = event.currentTarget;
      const bounding = magnetButton.getBoundingClientRect();
      
      gsap.to(magnetButton, 10, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
        ease: Power4.easeOut
      });
    }
  }, []); // Empty dependency array ensures useEffect runs only once
  
  return (
    <div className="magnetic">
      <button type="button" className="btn btn-outline-primary magnet-button" name="button">
        {buttonText}
      </button>
    </div>
  );
}

export default MagneticBtn;