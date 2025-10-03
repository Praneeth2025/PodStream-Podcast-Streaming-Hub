import React from 'react';
import Extend_left_left1 from '../New folder/Extend_left_left1.png';
import Extend_left_left2 from '../New folder/Extend_left_left2.png';
import './ExtendLeft.css';
import pine from '../New folder/oone.png';

const ExtendLeft = () => {
  // Function to scroll to the "Menu" section
  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('Menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the "Strengths" section
  const handleScrollToStrengths = () => {
    const strengthsSection = document.getElementById('Strengths'); // Use the ID of the Strengths section
    if (strengthsSection) {
      strengthsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='ExtendLeft_total'>
      <div>
        <div className='ExtendLeft_left'>
          <div className='ExtendLeft_left_1'>
            <img src={Extend_left_left1} alt='' />
            <h2 className='Extend_sub_text_title'>Traditional Recipes</h2>
            <p className='Extend_sub_sub_text'>Our chefs follow time-honored recipes to bring you the true taste of Italy.</p>
          </div>
          <div className='ExtendLeft_left_2'>
            <img src={Extend_left_left2} alt='' />
            <h2 className='Extend_sub_text_title'>Freshness Guaranteed</h2>
            <p className='Extend_sub_sub_text'>We source only the finest and freshest ingredients to create our authentic Italian dishes.</p>
          </div>
        </div>
        <h2 className='waiting'>So, what are you waiting for?</h2>
        <button className='white_button gap1' onClick={handleScrollToStrengths}>Learn More</button> {/* Scroll to Strengths section */}
        <button className="green_button gap" onClick={handleScrollToMenu}>Book Now</button> {/* Scroll to Menu section */}
      </div>
      <img src={pine} alt='' />
    </div>
  );
};

export default ExtendLeft;
