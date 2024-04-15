import React from 'react'
import Link from 'next/link'
import FAQArea1 from '@/components/FAQArea1'
import FAQArea2 from '@/components/FAQArea2'
import RequestQuote from '@/components/RequestQuote'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper" data-bg-src="img/breadcumb/breadcumb-bg.jpg">
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">FAQS</h1>
          <p className="breadcumb-text">
            construction and architecture environmentally most responsible for any
            kinds of themes.
          </p>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li>
                <Link href="/" passHref>Home</Link>
              </li>
              <li>FAQS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <FAQArea1/>
    <FAQArea2/>
    <RequestQuote/>
    </>
  )
}
