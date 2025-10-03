import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Main from './components/Main.jsx';
import About from './components/About_us.jsx';
import Extend from './components/Extend.jsx';
import ExtendLeft from './components/ExtendLeft.jsx';
import Strengths from './components/Strengths.jsx';
import SpecialDish from './components/Special_dish.jsx';
import Testimonials from './components/testimonials.jsx'; 
import Menu from './components/Menu.jsx';
import Signup from './components/signup.jsx';
import Login from './components/Login.jsx';
import Reservations from './components/Reservations.jsx';
import Cart from './components/Cart.jsx';
import Starters from './components/starters.jsx';
import MainCourse from './components/Maincourse.jsx';  
import Desserts from './components/Deserts.jsx';  
import Beverages from './components/Beverages.jsx';

const testimonial = [
  {
    stars: 5,
    review: "The food at this restaurant is absolutely amazing! The flavors are rich and authentic, and the presentation is top-notch. I highly recommend trying their pasta dishes.",
    name: "John Smith",
    post: "Food Critic, Food Magazine"
  },
  {
    stars: 4,
    review: "Great ambiance and friendly staff! The appetizers were fantastic, but the dessert menu really stole the show. Will definitely come back for more.",
    name: "Emily Brown",
    post: "Lifestyle Blogger, Taste Travels"
  },
  {
    stars: 5,
    review: "From the moment I walked in, I knew I was in for a treat. The service was impeccable, and the seafood dishes were simply to die for. A must-visit for food lovers!",
    name: "Michael Lee",
    post: "Editor, Gourmet Explorer"
  },
  {
    stars: 4,
    review: "A wonderful experience overall! The atmosphere was cozy, and the steak was cooked to perfection. Would have liked a few more vegetarian options, though.",
    name: "Sophia Green",
    post: "Restaurant Reviewer, Dining Delights"
  },
  {
    stars: 5,
    review: "This restaurant redefines fine dining. Every dish was a work of art, both in terms of presentation and flavor. I'll be telling all my friends about this gem!",
    name: "James Wilson",
    post: "Food Enthusiast, Culinary Chronicles"
  }
];

const MainLayout = () => {
  const [currentComponent, setCurrentComponent] = useState('starters');
  const [fadeClass, setFadeClass] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setFadeClass('fade-in');

    const timer = setTimeout(() => {
      setFadeClass('');
    }, 800);

    return () => clearTimeout(timer);
  }, [currentComponent]);

  const renderComponent = () => {
    switch (currentComponent) {
      case 'starters':
        return <Starters />;
      case 'main-course':
        return <MainCourse />;
      case 'desserts':
        return <Desserts />;
      case 'beverages':
        return <Beverages />;
      default:
        return <Starters />;
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${window.location.origin}/api/deleteUserItems`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      localStorage.removeItem('userToken');
      navigate('/zenith-bistro');
    } catch (error) {
      console.error('Error deleting user items:', error);
    }
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Main />
      <About />
      <Extend />
      <ExtendLeft />
      <Strengths />
      <SpecialDish />
      <Testimonials list={testimonial} />
      <Menu setCurrentComponent={setCurrentComponent} />
      <div className={fadeClass}>
        {renderComponent()}
      </div>
      <Reservations />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/zenith-bistro/signup" element={<Signup />} />
        <Route path="/zenith-bistro/*" element={<Login />} />
        <Route path="/zenith-bistro/main_page" element={<MainLayout />} />
        <Route path="/zenith-bistro/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
