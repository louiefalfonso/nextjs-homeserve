import React from 'react'
import Link from 'next/link'
import TeamGrid from '@/components/TeamGrid'
import RequestQuote from '@/components/RequestQuote'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper" data-bg-src="../img/breadcumb/breadcumb-bg.jpg">
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Team</h1>
          <p className="breadcumb-text">
            construction and architecture environmentally most responsible for any
            kinds of themes.
          </p>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li><Link href="/" passHref >Home</Link></li>
              <li>Team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <TeamGrid/>
    <RequestQuote/>
    </>
  )
}
