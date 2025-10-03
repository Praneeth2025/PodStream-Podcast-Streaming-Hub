import React, { useState } from 'react'; // Import useState
import './starters.css';
import { menu_list } from './Menu_list';
import veg_icon from '../New folder/veg.png';
import non_veg_icon from '../New folder/non-veg.png';
import axios from 'axios'; // Import axios at the top

const Starters = ({ changeCartColor }) => { // Accept changeCartColor as a prop
  const [addedItems, setAddedItems] = useState(new Set());

  const handleSubmit = async (item) => {
    if (addedItems.has(item.name)) {
      console.log(`${item.name} is already added to the cart.`);
      return;
    }

    const currentDate = new Date();
    const dataToSend = {
      date: currentDate,
      name: item.name,
      rate: item.rate,
      veg: item.veg,
      nonVeg: item.nonVeg,
      quantity: 1
    };

     // Send data to backend
     try {
      const response = await axios.post(`${window.location.origin}/api/saveData`, dataToSend);
      console.log('Response from server:', response.data);

      // Update the state to include the newly added item
      setAddedItems((prevItems) => new Set(prevItems).add(item.name));
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <div className='main-menu'>
        {
          menu_list.map((item, index) => {
            if (item.category === "starters") {
              return (
                <div className='menu-list' key={index}>
                  <img src={item.image} alt="" />
                  <div className='menu-text'>
                    <p className="Menu-Name">{item.name}</p>
                    <div className='category-complete'>
                      {item.veg === "yes" && (
                        <div className='zero'>
                          <img src={veg_icon} alt="" />
                          <p className="category">Veg</p>
                        </div>
                      )}
                      {item.nonVeg === "yes" && (
                        <div className='zero'>
                          <img src={non_veg_icon} alt="" />
                          <p className="category">Non-Veg</p>
                        </div>
                      )}
                    </div>
                    <div className='menu-bottom'>
                      {item.offer !== "NULL" && (
                        <div className='zero'>
                          <p className="Menu-offer">{item.offer} OFF</p>
                        </div>
                      )}
                      <p className="Menu-rate">₹{item.rate}</p>

                      <button className='green_button gap' onClick={() => handleSubmit(item)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })
        }
      </div>
    </div>
  );
};

export default Starters;
