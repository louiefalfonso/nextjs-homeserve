import FAQArea from '@/components/FAQArea'
import RequestQuote from '@/components/RequestQuote'
import ServiceArea from '@/components/ServiceArea'
import WhyChooseUsArea from '@/components/WhyChooseUsArea'
import React from 'react'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper" data-bg-src="img/breadcumb/breadcumb-bg.jpg">
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">SERVICES</h1>
          <p className="breadcumb-text">
            construction and architecture environmentally most responsible for any
            kinds of themes.
          </p>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>SERVICES</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ServiceArea/>
    <WhyChooseUsArea/>
    <FAQArea/>
    <RequestQuote/>
    </>
  )
}
