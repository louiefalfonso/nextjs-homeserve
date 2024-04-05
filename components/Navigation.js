"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Navigation() {
 const pathname = usePathname();
  return (
    <>
    <nav className="main-menu menu-style2 d-none d-lg-block">
        <ul className="main-menu__list">
            <li><Link className={pathname == "/" ? "active" : ""} href="/" passHref >Home</Link></li>
            <li><Link className={pathname == "/aboutus" ? "active" : ""}href="/aboutus" passHref >About Us</Link></li>
            <li><Link className={pathname == "/projects" ? "active" : ""} href="/projects" passHref>Projects</Link></li>
            <li><Link className={pathname == "/services" ? "active" : ""} href="/services" passHref>Services</Link></li>
            <li><Link className={pathname == "/teams" ? "active" : ""} href="/teams" passHref>Teams</Link></li>
            <li><Link className={pathname == "/faq" ? "active" : ""} href="/faq" passHref>FAQ</Link></li>
            <li><Link className={pathname == "/contactus" ? "active" : ""} href="/contactus" passHref>Contact Us</Link></li>
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
    </>
  )
}
