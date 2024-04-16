import React from 'react'
import Link from 'next/link'
import ContactArea from '@/components/ContactArea'
import FAQArea1 from '@/components/FAQArea1'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper" data-bg-src="img/breadcumb/breadcumb-bg.jpg">
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">CONTACT US</h1>
          <p className="breadcumb-text">
            construction and architecture environmentally most responsible for any
            kinds of themes.
          </p>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li><Link href="/" passHref>Home</Link>
              </li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ContactArea/>
    <FAQArea1/>
    </>
  )
}
