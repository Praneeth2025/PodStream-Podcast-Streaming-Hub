import React, { useState } from 'react'; // Import useState
import './menu.css';

const Menu = ({ setCurrentComponent }) => {
  const [activeOption, setActiveOption] = useState('starters'); // State to track active menu option

  const handleOptionClick = (option) => {
    setCurrentComponent(option); // Call the parent function to change the component
    setActiveOption(option); // Update active option state
  };

  return (
    <div id='Menu'>
      <div className='about_us_line'>
        <div className='line'></div>
        <h2 className='about_us_h2'>Menu</h2>
        <div className='line'></div>
      </div>
      <div className='menu-cts'>
        <h3 
          className={`menu-option ${activeOption === 'starters' ? 'greencolor' : ''}`} 
          onClick={() => handleOptionClick('starters')}
        >
          Starters
        </h3>
        <h3 
          className={`menu-option ${activeOption === 'main-course' ? 'greencolor' : ''}`} 
          onClick={() => handleOptionClick('main-course')}
        >
          Main Course
        </h3>
        <h3 
          className={`menu-option ${activeOption === 'desserts' ? 'greencolor' : ''}`} 
          onClick={() => handleOptionClick('desserts')}
        >
          Desserts
        </h3>
        <h3 
          className={`menu-option ${activeOption === 'beverages' ? 'greencolor' : ''}`} 
          onClick={() => handleOptionClick('beverages')}
        >
          Beverages
        </h3>
      </div>
    </div>
  );
};

export default Menu;
