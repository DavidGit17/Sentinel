import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hackerlogin from './Components/Login/Hackerlogin';
function Navbar() {
  const location = useLocation(); // To determine the current path for highlighting the active tab

  const companyNamef = "SENTINEL"; // First part of company name
  const companyNamefs = "SHIELD"; // Second part of company name

  const tabs = [
    { name: 'Home', path: '/homepage' },
    { name: 'Why Sentinel', path: '/whysentinel' },
    { name: 'Hacker', path: '/hacker' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div>
      {/* Top navbar with Hacker login and Customer login links aligned to the right */}
      <nav className="black text-white py-2 px-[160px] flex justify-end"> {/* Top navbar with padding */}
        <div className="flex space-x-6"> {/* Container for the links */}
          <Link to="/hackerlogin" className="text-white hover:text-customPurple">Hacker Login</Link> {/* Link to Hacker login */}
          <p className="border border-customPurple"></p>
          <Link to="/customerlogin" className="text-white hover:text-customPurple">Customer Login</Link> {/* Link to Customer login */}
        </div>
      </nav>

      {/* Main navbar with navigation tabs */}
      <nav className="navy text-white py-2 px-[142px]">
        <div className="flex justify-between items-center">
          <Link to="/homepage" className="no-underline"> {/* Company name on the left side */}
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
                  className={`px-4 py-2 rounded-md border-b-2 ${
                    location.pathname === tab.path
                      ? 'border-customPurple text-customPurple' // Active tab styles
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-700' // Inactive tab styles with hover effect
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
