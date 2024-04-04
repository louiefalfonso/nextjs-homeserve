import React from 'react'

export default function HeaderArea() {
  return (
    <>
    <header className="vs-header header-layout2">
        {/* Header Top */}
        <div className="header-topper">
            <div className="header-top">
            <div className="container">
                <div className="row align-items-center justify-content-between justify-content-md-center gy-1 text-center text-lg-start">
                <div className="col-lg-5 col-auto d-none d-lg-block">
                    <p className="header-text">
                    30 years' experience taking care of the nation’s homes. 
                    </p>
                </div>
                <div className="col-lg-7 col-auto text-center text-md-end">
                    <p className="header-text header-info">
                    <i className="fal fa-map-marker-alt" /> Leeds, West Yorkshire, England
                    </p>
                    <p className="header-text header-info">
                    <i className="fal fa-envelope" />{" "}
                    <a href="#">info@homeserve.co.uk</a>
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div className="sticky-wrapper z-index-common">
            <div className="header-shape2" />
            <div className="sticky-active">
                <div className="container">
                <div className="menu-top">
                    <div className="row justify-content-center justify-content-sm-between align-items-center gx-sm-0">
                    <div className="col-lg-3 col-md-auto col">
                        <div className="header-logo">
                        <a href="index.html">
                            <img src="img/logo-homeserve.png" alt="HomeServe" />
                        </a>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-auto col">
                        <div className="row align-items-center justify-content-end">
                        <div className="col-auto">
                            <nav className="main-menu menu-style2 d-none d-lg-block">
                            <ul className="main-menu__list">
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
                                <a href="about.html">About</a>
                                </li>
                                <li className="menu-item-has-children">
                                <a href="services.html">Services</a>
                                <ul className="sub-menu">
                                    <li>
                                    <a href="services.html">Service</a>
                                    </li>
                                    <li>
                                    <a href="service-details.html">Service Details</a>
                                    </li>
                                </ul>
                                </li>
                                <li className="menu-item-has-children mega-menu-wrap">
                                <a href="#">Pages</a>
                                <ul className="mega-menu">
                                    <li>
                                    <a href="#">Pagelist 1</a>
                                    <ul>
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
                                    </ul>
                                    </li>
                                    <li>
                                    <a href="#">Pagelist 3</a>
                                    <ul>
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
                                        <a href="service-details.html">
                                            Service Details
                                        </a>
                                        </li>
                                        <li>
                                        <a href="team.html">Team</a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <a href="#">Pagelist 4</a>
                                    <ul>
                                        <li>
                                        <a href="team-details.html">Team Details</a>
                                        </li>
                                        <li>
                                        <a href="project.html">Projects</a>
                                        </li>
                                        <li>
                                        <a href="project-details.html">
                                            Projects Details
                                        </a>
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
                                    </ul>
                                    </li>
                                    <li>
                                    <a href="#">Pagelist 5</a>
                                    <ul>
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
                                        <a href="element-typography.html">
                                            Elements Typography
                                        </a>
                                        </li>
                                        <li>
                                        <a href="element-buttons.html">
                                            Button Elements
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <a href="blog.html">News</a>
                                </li>
                                <li>
                                <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                            </nav>
                            <button className="vs-menu-toggle d-inline-block d-lg-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={38}
                                height="16.02"
                                viewBox="0 0 38 16.02"
                            >
                                <path
                                d="M1268,206.78v-2h38v2Zm0-7.01v-2h38v2Zm0-7.01v-2h38v2Z"
                                transform="translate(-1268 -190.76)"
                                fill="currentColor"
                                />
                            </svg>
                            </button>
                        </div>
                        <div className="col-auto d-none d-md-block">
                            <div className="header-btns">
                            <a href="#" className="vs-btn d-none d-vc-sm-block">
                                <span className="vs-btn__bar" />
                                Contact Us
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </header>
    </>
  )
}
