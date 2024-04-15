import ProjectGrid from '@/components/ProjectGrid'
import RequestQuote from '@/components/RequestQuote'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper" data-bg-src="img/breadcumb/breadcumb-bg.jpg">
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">OUR PROJECTS</h1>
          <p className="breadcumb-text">
            construction and architecture environmentally most responsible for any
            kinds of themes.
          </p>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li><Link href="/" passHref>Home</Link>
              </li>
              <li>OUR PROJECTS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ProjectGrid/>
    <RequestQuote/>
    </>
  )
}
