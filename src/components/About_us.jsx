import React from 'react'
import image_3 from '../New folder/about_us.png';
import './About_us.css'

const About = () => {
  return (
    <div className='about_us' id='About_Us'>
        <img src={image_3} alt="" className='image_3'></img>
        <div className='about_us_text'>
        <div className='about_us_line'>
        <div className='line'></div>
        <h2 className='about_us_h2'>About Us</h2>
        <div className='line'></div>
        </div>
        <p className='about_us_p'>Welcome to Zenith Bistro, where we offer exquisite Italian cuisine at unbeatable prices. Enjoy a warm and inviting ambience perfect for every occasion. Join us for an unforgettable dining experience that blends quality and affordability</p>
        </div>
    </div>
  )
}

export default About
