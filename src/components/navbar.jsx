import React, { useState, useEffect, useMemo } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ handleLogout }) => {
  const [menu, setMenu] = useState("Home");
  const [cartColor, setCartColor] = useState("black"); // State to manage cart icon color
  const navigate = useNavigate();

  const sections = useMemo(() => ['Home', 'About_Us', 'Menu', 'Reservations'], []);

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setMenu(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleCartClick = async () => {
    try {
      const response = await axios.get(`${window.location.origin}/api/userData`);
      const cartData = response.data;
      navigate('/zenith-bistro/cart', { state: { cartData } });
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to change cart icon color
  const changeCartColor = (color) => {
    setCartColor(color);
  };

  return (
    <div className='nav'>
      <h1 className="title">Zenith Bistro</h1>
      <div className='buttons'>
        {sections.map(section => (
          <li
            key={section}
            onClick={() => scrollToSection(section)}
            className={menu === section ? 'greencolor' : ''}
          >
            {section}
          </li>
        ))}
        {/* Cart Icon */}
        <li className="sign_in" onClick={handleCartClick} style={{ cursor: 'pointer' }}></li>
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" style={{ color: cartColor }} />
          <li><button onClick={handleLogout} className='LOGOUT'>Logout</button></li> {/* Logout button */}
        
      </div>
    </div>
  );
};

export default Navbar;
