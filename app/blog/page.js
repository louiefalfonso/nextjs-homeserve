import React from 'react'
import Link from 'next/link'
import BlogAreaNew from '@/components/BlogAreaNew'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper" data-bg-src="/img/breadcumb/breadcumb-bg.jpg">
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Latest News</h1>
          <p className="breadcumb-text">
            construction and architecture environmentally most responsible for any
            kinds of themes.
          </p>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li><Link href="/" passHref>Home</Link></li>
              <li>Latest News</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <BlogAreaNew/>
    </>
  )
}
