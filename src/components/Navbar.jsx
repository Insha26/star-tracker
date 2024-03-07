// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (

    <div className="navbar-container">
      <nav className="navbar" style={{ backgroundColor: 'rgba(255, 255, 255, 0)', position: 'absolute', width: '100%', zIndex: '1' }}>
        <ul>
        <Link to="/achievements">
        <li>Achievements</li>
        </Link>
        
        <Link to="/advancements">
        <li>Advancements</li>
        </Link>
        <Link to="/contributors">
        <li>Contributors</li>
        </Link>
        
        <Link to="/demo">
        <li>Demo</li>
        </Link>
      <Link to="/documents">
        <li>Documents</li>
        </Link>
       
       
        <Link to="https://github.com/Insha26">
        <li>
  Github
        </li>
        </Link>
          
        </ul>
      </nav>
    </div>
   
  );
}
