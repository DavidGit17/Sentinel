import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); // Determine the current route

  const companyNamef = "SENTINEL"; // First part of the company name
  const companyNamefs = "SHIELD"; // Second part of the company name

  const hideTopNavbarPaths = [
    '/homepage', // List the routes where the top navbar should not appear
    '/whysentinel',
    '/hacker',
    '/about',
    '/contact',
  ];

  const tabs = [
    { name: 'Home', path: '/homepage' },
    { name: 'Why Sentinel', path: '/whysentinel' },
    { name: 'Hacker', path: '/practo' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div>
      {/* Conditionally render the top navbar based on the current path */}
      { !hideTopNavbarPaths.includes(location.pathname) && (
        <nav className="black text-white py-2 px-[160px] flex justify-end"> {/* Top navbar */}
          <div className="flex space-x-6"> {/* Links */}
            <Link to="/hackerlogin" className="text-white hover:text-customPurple">
              Hacker Login
            </Link>
            <p className="border border-customPurple"></p>
            <Link to="/customerlogin" className="text-white hover:text-customPurple">
              Customer Login
            </Link>
          </div>
        </nav>
      )}

      {/* Main navbar with navigation tabs */}
      <nav className="navy text-white py-2 px-[142px]">
        <div className="flex justify-between items-center">
          <Link to="/" className="no-underline"> {/* Company name */}
            <p className="text-lg font-customsfuidisplay font-medium leading-5">
              {companyNamef}
              <br />
              <span className="text-customPurple font-bold">{companyNamefs}</span>
            </p>
          </Link>
          
          <ul className="flex space-x-4"> {/* Navigation tabs */}
            {tabs.map((tab) => (
              <li key={tab.path}>
                <Link
                  to={tab.path}
                  className={`px-4 py-2 border-b-2 ${
                    location.pathname === tab.path
                      ? 'border-customPurple text-white' // Active tab styles
                      : 'border-transparent text-white hover:text-customPurple' // Hover styles
                  }`}
                >
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
