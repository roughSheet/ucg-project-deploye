import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <span className="topbar-item">
              <span className="topbar-icon">✉</span>
              Info@u-cgs.com
            </span>
            <span className="topbar-divider">|</span>
            <span className="topbar-item">
              <span className="topbar-icon">📞</span>
              +1 307-213-4034
            </span>
            <span className="topbar-divider">|</span>
            <span className="topbar-item">+91 88666 42472</span>
          </div>
          <div className="topbar-right">
            <span className="topbar-badge">🏅 ISO 27001:2013</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">U</div>
            <div className="logo-text">
              <span className="logo-name">U-Connect Global</span>
              <span className="logo-subtitle">SERVICES</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="navbar-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>About</Link>
            <Link to="/record-retrieval-services" className={`nav-link ${isActive('/record-retrieval-services') ? 'nav-link-active' : ''}`}>Record Retrieval</Link>
            <Link to="/medical-billing-coding" className={`nav-link ${isActive('/medical-billing-coding') ? 'nav-link-active' : ''}`}>Medical Coding</Link>
            <Link to="/revenue-cycle-management" className={`nav-link ${isActive('/revenue-cycle-management') ? 'nav-link-active' : ''}`}>RCM</Link>
            <Link to="/medical-records-summarization" className={`nav-link ${isActive('/medical-records-summarization') ? 'nav-link-active' : ''}`}>Summarization</Link>
            <Link to="/blogs" className={`nav-link ${isActive('/blogs') ? 'nav-link-active' : ''}`}>Blogs</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}>Contact</Link>
          </div>

          {/* Book Now button */}
          <div className="navbar-right">
            <Link to="/contact" className="btn-booknow">Book Now</Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-menu-inner">
            <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'mobile-nav-active' : ''}`}>🏠 Home</Link>
            <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'mobile-nav-active' : ''}`}>ℹ️ About</Link>
            
            <div className="mobile-nav-section-label">Our Services</div>
            <Link to="/record-retrieval-services" className={`mobile-nav-link mobile-nav-service ${isActive('/record-retrieval-services') ? 'mobile-nav-active' : ''}`}>📋 Record Retrieval</Link>
            <Link to="/medical-billing-coding" className={`mobile-nav-link mobile-nav-service ${isActive('/medical-billing-coding') ? 'mobile-nav-active' : ''}`}>💊 Medical Coding</Link>
            <Link to="/revenue-cycle-management" className={`mobile-nav-link mobile-nav-service ${isActive('/revenue-cycle-management') ? 'mobile-nav-active' : ''}`}>💰 Revenue Cycle</Link>
            <Link to="/medical-records-summarization" className={`mobile-nav-link mobile-nav-service ${isActive('/medical-records-summarization') ? 'mobile-nav-active' : ''}`}>📄 Summarization</Link>
            
            <Link to="/blogs" className={`mobile-nav-link ${isActive('/blogs') ? 'mobile-nav-active' : ''}`}>📝 Blogs</Link>
            <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'mobile-nav-active' : ''}`}>📞 Contact</Link>
            
            <Link to="/contact" className="mobile-booknow">Book Now →</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;