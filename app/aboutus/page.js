import React from 'react'
import Link from 'next/link'
import AboutArea from '@/components/AboutArea'
import AboutHistory from '@/components/AboutHistory'
import ServiceArea from '@/components/ServiceArea'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper" data-bg-src="img/breadcumb/breadcumb-bg.jpg">
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">About Us</h1>
          <p className="breadcumb-text">
            construction and architecture environmentally most responsible for any
            kinds of themes.
          </p>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li><Link href="/" passHref>Home</Link></li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <AboutArea/>
    <AboutHistory/>
    <ServiceArea/>
    </>
  )
}
