import React from 'react';
import logo from '../assets/SMKID-Logo.png';

export function Logo() {
  return <img src={logo} alt="Logo" style={{
    width: '300px',
    filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))',
    borderRadius: '2px' // optional if you want rounded corners
  }}/>;
}