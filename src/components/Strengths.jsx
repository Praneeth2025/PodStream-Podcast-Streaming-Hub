import React from 'react'
import dininig_table from '../New folder/dining_table.png';
import chef from '../New folder/chef.png';
import party from'../New folder/party.png';
import'./strengths.css';

const Strengths = () => {
  return (
    <div >
        <div className="total">
      <div className='line'></div>
      <h2 className='strengths_h2 green'>Why Choose Us</h2>
      
        <div className='line'></div>
        </div>
        <h2 className='strengths_title'>Our Strengths</h2>
        <div className="strengths_session">
        <div className="sub_session">
            <img src={dininig_table} alt=''></img>
            <h3>Fresh Ambience</h3>
            <p className='strengths_text'>Our restaurant offers a fresh, inviting ambiance with elegant decor and a welcoming atmosphere for a relaxing dining experience.</p>
        </div>
        <div className="sub_session">
            <img  src={chef} alt=''></img>
            <h3>Skilled Chefs</h3>
            <p className='strengths_text'>Our talented chefs craft each dish with precision and creativity, delivering exceptional flavor and presentation.</p>
        </div>
        <div className="sub_session">
            <img  src={party} alt=''></img>
            <h3>Events & Parties</h3>
            <p className='strengths_text'>We specialize in hosting seamless events and parties with customized menus and impeccable service for all occasions.</p>
        </div>
        </div>
    </div>
  )
}

export default Strengths
