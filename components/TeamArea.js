import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TeamArea() {
  return (
    <>
    <section className="vsteam--layout1 space-top space-extra-bottom">
        <div className="container">
            <div className="row">
            <div className="col-lg-8 mx-auto">
                <div className="title-area text-center">
                <span className="sec-icon">
                    <Image src="/img/logo-homeserve.png" alt="HomeServe" width={170} height={55} priority/>
                </span>
                <span className="sec-subtitle2">OUR SKILLED TEAM</span>
                <h2 className="sec-title">MEET THE EXPERT TEAM</h2>
                </div>
            </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
                <div className="vsteam-style item">
                <div className="vsteam-style__body">
                    <div className="vsteam-style__content">
                    <h3 className="vsteam-style__title">
                        <Link href="/teams" passHref className="vsteam-style__title__link">
                            Harald Gindl
                        </Link>
                    </h3>
                    <span className="vsteam-style__designation">
                        Head Railway Construction
                    </span>
                    <div className="vs-infobox2">
                        <div className="vs-infobox2__icon">
                        <img src="img/icons/phone-info.svg" alt="phone icon" />
                        </div>
                        <div className="vs-infobox2__content">
                        <span className="vs-infobox2__number" href="#">+44 (88) 555-013</span>
                        </div>
                    </div>
                    </div>
                    <div className="vsteam-style__media">
                            <img
                        src="img/team/team-member-1-1.png"
                        alt="Team Member 1"
                        className="team-block__member--img"
                        />
                        
                    </div>
                </div>
                <div className="social-style vsteam-style__social">
                    <ul>
                        <li><Link href="https://www.facebook.com/" passHref><i className="fab fa-facebook" /></Link></li>
                        <li><Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="https://www.linkedin.com/" passHref><i className="fab fa-linkedin" /></Link></li>
                        <li><Link href="https://www.linkedin.com/" passHref><i className="fab fa-instagram" /></Link></li>    
                    </ul>
                </div>
                <div className="vsteam-style__shape">
                    <svg width={370} height={253} viewBox="0 0 370 253">
                    <g id="Clip" transform="translate(-379 -4338)">
                        <path
                        d="M443.309,4413.294l71.192,65.381-139.737,92.88-25.955,15.4Z"
                        fill="#f0f0f0"
                        />
                        <path
                        d="M750.9,4338,866,4621.8,420.848,4624,340,4619.739Z"
                        fill="#f0f0f0"
                        />
                    </g>
                    </svg>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="vsteam-style item hovered">
                <div className="vsteam-style__body">
                    <div className="vsteam-style__content">
                    <h3 className="vsteam-style__title">
                        <Link href="/teams" passHref className="vsteam-style__title__link">
                            Thomas Walkar
                        </Link>
                    </h3>
                    <span className="vsteam-style__designation">
                        Head Railway Construction
                    </span>
                    <div className="vs-infobox2">
                        <div className="vs-infobox2__icon">
                        <img src="img/icons/phone-info.svg" alt="phone icon" />
                        </div>
                        <div className="vs-infobox2__content">
                        <span className="vs-infobox2__number" href="tel:+1288555-013">
                            +12 (88) 555-013
                        </span>
                        </div>
                    </div>
                    </div>
                    <div className="vsteam-style__media">
                        <img
                        src="img/team/team-member-1-2.png"
                        alt="Team Member 1"
                        className="team-block__member--img"
                        />
                    </div>
                </div>
                <div className="social-style vsteam-style__social">
                    <ul>
                        <li><Link href="https://www.facebook.com/" passHref><i className="fab fa-facebook" /></Link></li>
                        <li><Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="https://www.linkedin.com/" passHref><i className="fab fa-linkedin" /></Link></li>
                        <li><Link href="https://www.linkedin.com/" passHref><i className="fab fa-instagram" /></Link></li> 
                    </ul>
                </div>
                <div className="vsteam-style__shape">
                    <svg width={370} height={253} viewBox="0 0 370 253">
                    <g id="Clip" transform="translate(-379 -4338)">
                        <path
                        d="M443.309,4413.294l71.192,65.381-139.737,92.88-25.955,15.4Z"
                        fill="#f0f0f0"
                        />
                        <path
                        d="M750.9,4338,866,4621.8,420.848,4624,340,4619.739Z"
                        fill="#f0f0f0"
                        />
                    </g>
                    </svg>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="vsteam-style item">
                <div className="vsteam-style__body">
                    <div className="vsteam-style__content">
                    <h3 className="vsteam-style__title">
                        <Link href="/teams" passHref className="vsteam-style__title__link">
                            Hazel Kalim
                        </Link>
                    </h3>
                    <span className="vsteam-style__designation">
                        Head Railway Construction
                    </span>
                    <div className="vs-infobox2">
                        <div className="vs-infobox2__icon">
                        <img src="img/icons/phone-info.svg" alt="phone icon" />
                        </div>
                        <div className="vs-infobox2__content">
                        <span className="vs-infobox2__number" href="tel:+1288555-013">
                            +12 (88) 555-013
                        </span>
                        </div>
                    </div>
                    </div>
                    <div className="vsteam-style__media">
                        <img
                        src="img/team/team-member-1-3.png"
                        alt="Team Member 1"
                        className="team-block__member--img"
                        />
                    </div>
                </div>
                <div className="social-style vsteam-style__social">
                    <ul>
                        <li><Link href="https://www.facebook.com/" passHref><i className="fab fa-facebook" /></Link></li>
                        <li><Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="https://www.linkedin.com/" passHref><i className="fab fa-linkedin" /></Link></li>
                        <li><Link href="https://www.linkedin.com/" passHref><i className="fab fa-instagram" /></Link></li> 
                    </ul>
                </div>
                <div className="vsteam-style__shape">
                    <svg width={370} height={253} viewBox="0 0 370 253">
                    <g id="Clip" transform="translate(-379 -4338)">
                        <path
                        d="M443.309,4413.294l71.192,65.381-139.737,92.88-25.955,15.4Z"
                        fill="#f0f0f0"
                        />
                        <path
                        d="M750.9,4338,866,4621.8,420.848,4624,340,4619.739Z"
                        fill="#f0f0f0"
                        />
                    </g>
                    </svg>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
