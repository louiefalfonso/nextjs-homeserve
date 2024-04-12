import React from 'react'
import Link from 'next/link'

export default function FooterArea() {
  return (
    <>
    <footer className="footer-layout--style2 z-index-common">
        <div className="footer-layout__bg" data-bg-src="../img/footer/footer-bg-h2.jpg"/>
        <div className="container">
            <div className="footer-layout__top">
            <div className="row justify-content-center justify-content-lg-between">
                <div className="col-md-12 col-lg-4 col-xl-4">
                <div className="widget footer-widget">
                    <div className="widget__logo2">
                    <img src="img/logo-homeserve.png" alt="logo" />
                    </div>
                    <div className="vs-widget-about">
                    <p className="footer-text2">
                        Lorem ipsum dolor sit amet, conse auctor aliquet
                        Aenesollicitudi, lobibendum auctor. lobiben aliquet.
                    </p>
                    </div>
                    <div className="social-style2">
                    <ul>
                        <li><Link href="https://www.facebook.com/" passHref><i className="fab fa-facebook" /></Link></li>
                        <li><Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="https://www.linkedin.com/" passHref><i className="fab fa-linkedin" /></Link></li>
                        <li><Link href="https://www.linkedin.com/" passHref><i className="fab fa-instagram" /></Link></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4">
                <div className="widget footer-widget">
                    <h3 className="widget_title2">QUICK LINKS</h3>
                    <div className="footer-menu--style2">
                    <ul>
                        <li><Link href="/" passHref >Home</Link></li>
                        <li><Link href="/aboutus" passHref >About Us</Link></li>
                        <li><Link href="/projects" passHref>Projects</Link></li>
                        <li><Link href="/services" passHref>Services</Link></li>
                        <li><Link href="/pricing" passHref>Pricing</Link></li>
                        <li><Link href="/teams" passHref>Teams</Link></li>
                        <li><Link href="/blog" passHref>Latest News</Link></li>
                        <li><Link href="/faq" passHref>FAQ</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4">
                <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title2">CONTACT INFO</h3>
                    <div className="footer-info--style3">
                    <div className="footer-info_icon">
                        <i>
                        <img src="../img/icons/phone-info.svg" alt="phone-info" />
                        </i>
                    </div>
                    <div className="media-body">
                        <span className="footer-info_label">Phone No:</span>
                        <div className="footer-info_link">
                        <a href="tel:+254982156213">+44 (07) 1234 5678</a>
                        </div>
                    </div>
                    </div>
                    <div className="footer-info--style3">
                    <div className="footer-info_icon">
                        <i>
                        <img
                            src="../img/icons/open-mail-info.svg"
                            alt="open-email-info"
                        />
                        </i>
                    </div>
                    <div className="media-body">
                        <span className="footer-info_label">Email Address:</span>
                        <div className="footer-info_link">
                        <a href="#">info@homeserve.co.uk</a>
                        </div>
                    </div>
                    </div>
                    <div className="footer-info--style3">
                    <div className="footer-info_icon">
                        <i>
                        <img
                            src="../img/icons/location-info.svg"
                            alt="location info"
                        />
                        </i>
                    </div>
                    <div className="media-body">
                        <div className="footer-info_link">
                        3320 Century Way Thorpe Park, Leeds, West Yorkshire, England
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright-wrap">
            <div className="row align-items-center">
                <div className="col-lg-6">
                <p className="copyright-text text-center text-lg-start">
                    © 2024. All Rights Reserved By{" "}
                    <a href="">HomeServe</a>
                </p>
                </div>
                <div className="col-lg-6">
                <div className="widget widget_nav_menu footer-widget">
                    <div className="menu-all-pages-container">
                    <ul className="menu justify-content-center justify-content-lg-end ">
                        <li>
                        <a href="contact.html">PRIVACY</a>
                        </li>
                        <li>
                        <a href="faq.html">TERMS &amp; CONDITION</a>
                        </li>
                        <li>
                        <a href="about.html">About Us</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>
    </>
  )
}
