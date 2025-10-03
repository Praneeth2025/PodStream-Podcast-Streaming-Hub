import React, { useState } from 'react';
import './testimonials.css';
import profile from '../New folder/profile.png';

const Testimonials = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);  // Track current testimonial
  const [animating, setAnimating] = useState(false);   // Track if animation is in progress

  const handleNextClick = () => {
    if (animating) return;  // Prevent new animation if one is already in progress
    setAnimating(true);

    const nextIndex = (currentIndex + 1) % props.list.length;

    setTimeout(() => {
      setCurrentIndex(nextIndex);  // Move to the next testimonial
      setAnimating(false);  // End animation
    }, 750);  // Match this duration with your CSS transition duration
  };

  const currentTestimonial = props.list[currentIndex];

  // Function to render stars based on the 'stars' rating
  const renderStars = (rating) => {
    const totalStars = 5;  // Always show 5 stars
    return [...Array(totalStars)].map((_, i) => (
      <i key={i} className={i < rating ? 'fas fa-star star-filled' : 'far fa-star star-empty'}></i>
    ));
  };

  return (
    <div className='total_testimonials' id='Strengths'>
      <h2 className='testimonials_title green'>Customer Testimonials</h2>

      <div className={`testimonials_box ${animating ? 'fade-out' : ''}`}>
        <div className='stars'>{renderStars(currentTestimonial.stars)}</div>
        <p className='testimonials_review'>"{currentTestimonial.review}"</p>
        <div className="info">
          <img src={profile} alt='profile' />
          <div>
            <p className='testimonial_name'>{currentTestimonial.name}</p>
            <p className='testimonial_post'>{currentTestimonial.post}</p>
          </div>
          <div className='vline'></div>
          <p className='webflow'>Webflow</p>
        </div>
      </div>

      {/* Right arrow button */}
      <button className="arrow_button" onClick={handleNextClick}>→</button>
    </div>
  );
};

export default Testimonials;
