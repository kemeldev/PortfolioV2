import './Footer.css'
import { githubLogo, linkedIn } from '../../../assets/icons'
import { ellipse1, myPhoto } from '../../../assets/images'



export default function Footer () {
  return(
    <div className='footer_mainContainer'>

      <div className='parallax-container'>

        <div className='ellipse'>
          <div>
          <img src={ellipse1} alt="white ellipse to create parallax effect" />
          </div>
        </div>

        <div className='footer_content'>
          <img src={myPhoto} className="my_photo" alt="picture of portfolio owner" />

          <div className='footer_data'>
            <h2>Let's work together</h2>
            <div>
              <p>kemel.developer@gmail.com</p>
            </div>
            <div>
              <p>(+506) 8885-0715</p>
            </div>
            <div className='footer_images'>
              <img src={linkedIn} alt="linked In logo" />
              <img src={githubLogo} alt="github Logo" />
            </div>
          </div>
        </div>

      </div>

      
      

      

    </div>
  )
}