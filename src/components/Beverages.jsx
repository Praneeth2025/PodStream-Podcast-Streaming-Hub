import React, { useState } from 'react'; // Import useState
import { menu_list } from './Menu_list';
import veg_icon from '../New folder/veg.png';
import non_veg_icon from '../New folder/non-veg.png';
import axios from 'axios';

const Beverages = () => {
  // State to track added items
  const [addedItems, setAddedItems] = useState(new Set()); // Use a Set for unique items

  const handleSubmit = async (item) => {
    // Check if the item is already added
    if (addedItems.has(item.name)) {
      console.log(`${item.name} is already added to the cart.`);
      return; // Prevent further execution if item is already added
    }

    const currentDate = new Date();
    // Prepare data to send to the backend
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
          menu_list.map((index, value) => {
            if (index.category === "beverages") {
              return (
                <div className='menu-list' key={value}>
                  <img src={index.image} alt="" />
                  <div className='menu-text'>
                    <p className="Menu-Name">{index.name}</p>
                    <div className='category-complete'>
                      {index.veg === "yes" && (
                        <div className='zero'>
                          <img src={veg_icon} alt="" />
                          <p className="category">Veg</p>
                        </div>
                      )}
                      {index.nonVeg === "yes" && (
                        <div className='zero'>
                          <img src={non_veg_icon} alt="" />
                          <p className="category">Non-Veg</p>
                        </div>
                      )}
                    </div>
                    <div className='menu-bottom'>
                      {index.offer !== "NULL" && (
                        <div className='zero'>
                          <p className="Menu-offer">{index.offer} OFF</p>
                        </div>
                      )}
                      <p className="Menu-rate">₹{index.rate}</p>
                      <button className='green_button gap' onClick={() => handleSubmit(index)}>
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

export default Beverages;
