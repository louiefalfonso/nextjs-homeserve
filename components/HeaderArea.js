import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
                                        <Link href="/" passHref>
                                             <Image src="/img/logo-homeserve.png" alt="HomeServe" width={170} height={55} priority/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-auto col">
                                    <div className="row align-items-center justify-content-end">
                                        <div className="col-auto">
                                            <nav className="main-menu menu-style2 d-none d-lg-block">
                                                <ul className="main-menu__list">
                                                    <li><Link href="/" passHref>Home</Link></li>
                                                    <li><Link href="/aboutus" passHref>About Us</Link></li>
                                                    <li><Link href="/projects" passHref>Projects</Link></li>
                                                    <li><Link href="/services" passHref>Services</Link></li>
                                                    <li><Link href="/pricing" passHref>Pricing</Link></li>
                                                    <li><Link href="/faq" passHref>FAQ</Link></li>
                                                    <li><Link href="/contactus" passHref>Contact Us</Link></li>
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
                                                <Link href="/contactus" passHref className="vs-btn d-none d-vc-sm-block">
                                                    <span className="vs-btn__bar" />
                                                    Contact Us
                                                </Link>
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
