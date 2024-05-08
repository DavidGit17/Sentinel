import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const tabs = [
    { name: 'Home', path: '/homepage' },
    { name: 'Why Sentinel', path: '/whysentinel' },
    { name: 'Hacker', path: '/hacker' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-around">
        {tabs.map((tab) => (
          <li key={tab.path}>
            <Link
              to={tab.path}
              className={`px-4 py-2 rounded-md ${
                location.pathname === tab.path ? 'bg-blue-500' : 'hover:bg-gray-700'
              }`}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
