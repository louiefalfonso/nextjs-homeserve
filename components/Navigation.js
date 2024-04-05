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
            <li><Link className={pathname == "/pricing" ? "active" : ""} href="/pricing" passHref>Pricing</Link></li>
            <li><Link className={pathname == "/teams" ? "active" : ""} href="/teams" passHref>Teams</Link></li>
            <li><Link className={pathname == "/faq" ? "active" : ""} href="/faq" passHref>FAQ</Link></li>
        </ul>
    </nav>
    </>
  )
}
