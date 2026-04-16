import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar({ brand = "Sameh Zoaa", className = "main-nav" }) {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="header section">
      <div className="brand">{brand}</div>
      <nav className={className}>
        {navItems.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.path}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
