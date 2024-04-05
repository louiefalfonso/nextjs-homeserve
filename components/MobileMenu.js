import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MobileMenu() {
  return (
    <>
    <div className="vs-menu-wrapper">
        <div className="vs-menu-area text-center">
            <button className="vs-menu-toggle">
            <i className="fal fa-times" />
            </button>
            <div className="mobile-logo">
              <Link href="/" passHref>
                  <Image src="/img/logo-homeserve.png"  className="logo"  alt="HomeServe" width={170} height={55} priority/>
              </Link>
            </div>
            <div className="vs-mobile-menu">
            <ul>
                <li><Link href="/" passHref>Home</Link></li>
                <li><Link href="/aboutus" passHref>About Us</Link></li>
                <li><Link href="/projects" passHref>Projects</Link></li>
                <li><Link href="/services" passHref>Services</Link></li>
                <li><Link href="/pricing" passHref>Pricing</Link></li>
                <li><Link href="/faq" passHref>FAQ</Link></li>
                <li><Link href="/contactus" passHref>Contact Us</Link></li>
            </ul>
            </div>
        </div>
    </div>
    </>
  )
}
