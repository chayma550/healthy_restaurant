import React ,{useEffect}from 'react'
import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutBackground from "../Assets/about-background.png"
import AboutImage from "../Assets/about-background-image.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   <div className='about-section-container' id="about"> 
    <div className="about-background-image-container">
    <img src={AboutBackground} alt="aboutbackground"/>
    </div>
     <div className="about-section-image-container" data-aos="fade-right">
      <img src={AboutImage} alt="about"/>
     </div>
    <div className="about-section-text-container" data-aos="fade-left">
      <p className='primary-subheading'>About</p>
      <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et  elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
    </div>
   </div>

  )
}

export default About
