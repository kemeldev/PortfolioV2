import { useState } from 'react';
import { rightArrow } from '../../../assets/icons'
import { kemelImage } from '../../../assets/images'
import ParallaxText from '../../../componets/ParallaxText'
import './Hero.css'

export default function Hero () {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigator.clipboard.writeText('kemel.developer@gmail.com').then(() => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };
  return (


    <>
      <section className='hero_mainContainer'>

        <div className='hero_description'>
          <h4>Full stack</h4>
          <h4>Web Developer</h4>
          <div className='hero_descriptionContact'>
            <img src={rightArrow}/>
            <h4
              className={isClicked ? 'clicked' : isHovered ? 'hovered' : ''}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              {isClicked ? 'Email Copied' : isHovered ? 'Copy email ?' : 'Get in touch'}
            </h4>
          </div>
        </div>

        <div className='hero_mainImage'>
          <img src={kemelImage} alt="photo portfolio owner" />
        </div>

        <section className='hero_parallaxText'>
          <ParallaxText baseVelocity={-1}>kemel.dev - Kevin Bolanos -</ParallaxText>
          
        </section>

      </section>
    </>
  )
}