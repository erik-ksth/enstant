import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './style.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track the scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the threshold value to determine when to show the button
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}>
      <Link to="top" smooth={true} duration={500}>
        <button onClick={scrollToTop}>
          <KeyboardArrowUpIcon/>
        </button>
      </Link>
    </div>
  );
};

export default ScrollToTopButton;
