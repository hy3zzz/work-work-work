import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function FixedImage2({ src, alt }) {
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleClick = () => {
      navigate('/');
    };
  
    if (location.pathname !== '/about') {
      return null;
    }
  
    return (
      <img
        src={src}
        alt={alt}
        onClick={handleClick}
        style={{
          cursor: 'pointer',  
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '200px',
        }}
      />
    );
  }

export default FixedImage2;

