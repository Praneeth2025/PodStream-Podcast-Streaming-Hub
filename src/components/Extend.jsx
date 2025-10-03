import React from 'react'
import Extend_one from '../New folder/pngegg (3).png';
import Extend_two from '../New folder/pngegg (4).png';
import './Extend.css'
const Extend = () => {
  return (
    <div className='Extend_total'>
      <h2 className='Extend_h2'>Experience the Authentic Italian Culinary Delights at Our Restaurant</h2>
      <div className='Extend_Side_text'>
        <p className='Extend_p Upperpart'>Indulge in a gastronomic journey with our chef's specialities and signature dishes, crafted with love and passion.</p>
        <div className='Extend_division'>
            <div className='Extend_leftpart'>
                <img src={Extend_one} alt=""/>
                <h2 className='Extend_sub_text_title'>Specialities</h2>
                <p className='Extend_sub_sub_text'>Taste the flavors of Italy with our carefully curated menu featuring traditional dishes.</p>
            </div>
            <div className='Extend_rightpart'>
                <img src={Extend_two} alt="" />
                <h2 className='Extend_sub_text_title'>Signature Dishes</h2>
                <p className='Extend_sub_sub_text'>Savor our chef's unique creations that showcase the essence of Italian cuisine.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Extend
