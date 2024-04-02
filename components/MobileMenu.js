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
                <img src="img/logo-black.png" alt="Consik" className="logo" />
            </a>
            </div>
            <div className="vs-mobile-menu">
            <ul>
                <li className="menu-item-has-children">
                <a href="index.html">Home</a>
                <ul className="sub-menu">
                    <li>
                    <a href="index.html">Home 1</a>
                    </li>
                    <li>
                    <a href="index-2.html">Home 2</a>
                    </li>
                    <li>
                    <a href="index-3.html">Home 3</a>
                    </li>
                </ul>
                </li>
                <li>
                <a href="about.html">About Us</a>
                </li>
                <li className="menu-item-has-children">
                <a href="service.html">Services</a>
                <ul className="sub-menu">
                    <li>
                    <a href="services.html">Service</a>
                    </li>
                    <li>
                    <a href="service-details.html">Service Details</a>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <a href="#none">Pages</a>
                <ul className="sub-menu">
                    <li>
                    <a href="index.html">Home 1</a>
                    </li>
                    <li>
                    <a href="index-2.html">Home 2</a>
                    </li>
                    <li>
                    <a href="index-3.html">Home 3</a>
                    </li>
                    <li>
                    <a href="shop.html">Shop</a>
                    </li>
                    <li>
                    <a href="shop-details.html">Shop Details</a>
                    </li>
                    <li>
                    <a href="faq.html">FAQ's</a>
                    </li>
                    <li>
                    <a href="blog.html">Blog List</a>
                    </li>
                    <li>
                    <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                    <a href="blog-details.html">Blog Details</a>
                    </li>
                    <li>
                    <a href="services.html">Service</a>
                    </li>
                    <li>
                    <a href="service-details.html">Service Details</a>
                    </li>
                    <li>
                    <a href="team.html">Team</a>
                    </li>
                    <li>
                    <a href="team-details.html">Team Details</a>
                    </li>
                    <li>
                    <a href="project.html">Projects</a>
                    </li>
                    <li>
                    <a href="project-details.html">Projects Details</a>
                    </li>
                    <li>
                    <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                    <a href="error.html">Error Page</a>
                    </li>
                    <li>
                    <a href="comming-soon.html">Comming Soon</a>
                    </li>
                    <li>
                    <a href="account.html">My Account</a>
                    </li>
                    <li>
                    <a href="cart.html">Cart</a>
                    </li>
                    <li>
                    <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                    <a href="price.html">Pricing Plan</a>
                    </li>
                    <li>
                    <a href="element-typography.html">Elements Typography</a>
                    </li>
                    <li>
                    <a href="element-buttons.html">Button Elements</a>
                    </li>
                </ul>
                </li>
                <li className="menu-item-has-children">
                <a href="blog.html">News</a>
                <ul className="sub-menu">
                    <li>
                    <a href="blog.html">Blog List</a>
                    </li>
                    <li>
                    <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                    <a href="blog-details.html">Blog Details</a>
                    </li>
                </ul>
                </li>
                <li>
                <a href="contact.html">Contact Us</a>
                </li>
            </ul>
            </div>
        </div>
    </div>
    </>
  )
}
