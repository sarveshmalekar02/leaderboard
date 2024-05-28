import React, { useState } from 'react';
import './navbar.css';

const NavigationBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">unfluke</div>
        <div className="navbar-icons">
          <span className="navbar-icon">🔔</span>
          <span className="navbar-icon">💰100</span>
          <div className="navbar-profile" onMouseEnter={toggleProfile} onMouseLeave={toggleProfile}>
            <span className="profile-icon">👤</span>
            {/* {isProfileOpen && (
              <ul className="profile-dropdown">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            )} */}
          </div>
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="/leaderboard">LeaderBoard</a></li>
        <li><a href="/historical-trading">Historical Trading</a></li>
        <li><a href="/historical-chart">Historical Chart</a></li>
        <li><a href="/scanners">Scanners</a></li>
        <li><a href="/alerts">Alerts</a></li>
        <li><a href="/basic-backtest">Basic Backtest</a></li>
        <li><a href="/advanced-backtest">Advanced Backtest</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/my-earnings">My Earnings</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
