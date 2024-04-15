import PricingPlan from '@/components/PricingPlan'
import RequestQuote from '@/components/RequestQuote'
import React from 'react'
import Link from 'next/link'


export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper" data-bg-src="img/breadcumb/breadcumb-bg.jpg">
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">PRICING PLANS</h1>
          <p className="breadcumb-text">
            construction and architecture environmentally most responsible for any
            kinds of themes.
          </p>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li>
                <Link href="/" passHref>Home</Link>
              </li>
              <li>PRICING PLANS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <PricingPlan/>
    <RequestQuote/>
    </>
  )
}
