import React from 'react';
import './main.css';
import main_img from '../New folder/open_page.png';

const Main = () => {
  // Function to scroll to the "Reservations" section
  const handleScrollToReservations = () => {
    const reservationsSection = document.getElementById('Reservations');
    if (reservationsSection) {
      reservationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the "About Us" section
  const handleScrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('About_Us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='center' id='Home'>
      <div className='text'>
        <h2>Authentic Italian Cuisine Tailored to Your <span className="yellow">Taste</span></h2>
        <p>
          Experience the rich and authentic flavors of Italy while basking in the warm and inviting atmosphere, where every dish tells a story of tradition and passion.
        </p>
        <div className='down_group'>
          <li className="down_button yello_button" onClick={handleScrollToAboutUs}>Explore</li> {/* Scroll to About Us */}
          <li className="down_button other_button" onClick={handleScrollToReservations}>Reserve</li> {/* Scroll to Reservations */}
        </div>
      </div>
      <img src={main_img} alt="" className="image"></img>
    </div>
  );
}

export default Main;
