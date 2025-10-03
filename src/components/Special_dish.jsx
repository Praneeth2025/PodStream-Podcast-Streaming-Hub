import React from 'react'
import lasagna from '../New folder/lasagna.jpg';
import'./special_dish.css'
const SpecialDish = () => {
  return (
    <div className='special_dish'>
        <img src={lasagna} alt=''></img>
        <div>
      <h2 className='centerit'>Our Special Dish</h2>
      <h2 className='Lasagne green'>Lasagna</h2>
      <p class='centerit opacity100 special_text'>A meal made up of layers of pasta, meat, cheese, and tomato sauce is as close as it can get to culinary perfection. Lasagna is from the Naples region and it was originally cooked with bechamel sauce, ragu, and cheese.</p>
      <div className="price_tag">
        <p className='lasagna_price opacity100'>₹200</p>
        <button className='green_button gap'>Add to Cart</button>
      </div>
      </div>
    </div>
  )
}

export default SpecialDish
