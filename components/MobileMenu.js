import React from 'react'

export default function MobileMenu() {
  return (
    <>
    <div className="vs-menu-wrapper">
        <div className="vs-menu-area text-center">
            <button className="vs-menu-toggle">
            <i className="fal fa-times" />
            </button>
            <div className="mobile-logo">
            <a href="index.html">
                <img src="img/logo-homeserve.png" alt="Consik" className="logo" />
            </a>
            </div>
            <div className="vs-mobile-menu">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="blog.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            </div>
        </div>
    </div>
    </>
  )
}
