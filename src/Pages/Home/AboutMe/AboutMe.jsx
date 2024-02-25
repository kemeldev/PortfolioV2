import { useScrollVisibility } from '../../../hooks/useScrollVisibility';
import './AboutMe.css'

export default function AboutMe() {

  const [aboutRef, isVisible] = useScrollVisibility();
  return (
    <>
      <div ref={aboutRef} className={`about_mainContainer ${isVisible ? 'appear-transition' : ''}`}>
        <p>Software engineer specialized on full-stack web development. I believe in impact and experience a good software product can create for the user.</p>
        <p>"Live as if you were to die tomorrow. Learn as if you were to live forever."</p>
      </div>
    </>
  )
}