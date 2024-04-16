import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <>
    <div className="breadcumb-wrapper" data-bg-src="../img/breadcumb/breadcumb-bg.jpg">
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Building Construction</h1>
          <p className="breadcumb-text">
            construction and architecture environmentally most responsible for any
            kinds of themes.
          </p>
          <div className="breadcumb-menu-wrap">
            <ul className="breadcumb-menu">
              <li><Link href="/" passHref>Home</Link></li>
              <li><Link href="/services" passHref>Services</Link></li>
              <li>Building Construction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="service--details space-top space-extra-bottom">
      <div className="container">
        <h3>Building Construction</h3>
        <p className="mb-40">
          Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean sollicitudi,
          lobibendum auctor.Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean
          sollicitudi, lobibendum auctor. Lorem ipsum dolor sit amet, conse auctor
          aliquet. Aenean sollicitudi, lobibendum auctor.Lorem ipsum dolor sit amet,
          conse auctor aliquet. Aenean sollicitudi, lobibendum auctor.
        </p>
        <div className="img-box z-index-common mb-40">
          <div className="icon-box1">
            <img
              src="../img/icons/service-icon-2-1.svg"
              alt="service details icon 1"
            />
          </div>
          <img src="../img/services/service-details-1.jpg" alt="services" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean sollicitudi,
          lobibendum auctor.Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean
          sollicitudi, lobibendum auctor. Lorem ipsum dolor sit amet, conse auctor
          aliquet. Aenean sollicitudi, lobibendum auctor.Lorem ipsum dolor sit amet,
          conse auctor aliquet. Aenean sollicitudi, lobibendum auctor. Lorem ipsum
          dolor sit amet, conse auctor aliquet. Aenean sollicitudi, lobibendum auct
          sollicitudi, lobibendum auctor. Lorem ipsum dolor sit amet, conse auctor
          aliquet. Aenean sollicitudi, lobibendum auctor.Lorem ipsum dolor sit amet,
          conse auctor aliquet. Aenean sollicitudi, lobibendum auctor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean sollicitudi,
          lobibendum auctor.Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean
          sollicitudi, lobibendum auctor. Lorem ipsum dolor sit amet, conse auctor
          aliquet. Aenean sollicitudi, lobibendum auctor.Lorem ipsum dolor sit amet,
          conse auctor aliquet. Aenean sollicitudi, lobibendum auctor.
        </p>
        <h3 className="pt-4">Simple Steps to Process</h3>
        <p>
          Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean sollicitudi,
          lobibendum auctor.Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean
          sollicitudi, lobibendum auctor. Lorem ipsum dolor sit amet, conse auctor
          aliquet. Aenean sollicitudi, lobibendum auctor.Lorem ipsum dolor sit amet,
          conse auctor aliquet. Aenean sollicitudi, lobibendum auctor.
        </p>
        <div className="list-style3">
          <ul className="list-unstyled">
            <li>Far curiosity incommode now led smallness allowance.</li>
            <li>Favour bed assure son things yet.</li>
            <li>She consisted consulted elsewhere happiness</li>
            <li>Disposing household any old the.</li>
            <li>Widow downs you new shade drift hopes small.</li>
            <li>Interested discretion estimating on stimulated.</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-6 mb-40">
            <img
              src="../img/services/service-details-2.jpg"
              alt="Service Details"
            />
          </div>
          <div className="col-md-6 mb-40">
            <img
              src="../img/services/service-details-3.jpg"
              alt="Service Details"
            />
          </div>
        </div>
        <h3>Customer Benefits</h3>
        <p>
          Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean sollicitudi,
          lobibendum auctor.Lorem ipsum dolor sit amet, conse auctor aliquet. Aenean
          sollicitudi, lobibendum auctor. Lorem ipsum dolor sit amet, conse auctor
          aliquet. Aenean sollicitudi, lobibendum auctor.Lorem ipsum dolor sit amet,
          conse auctor aliquet. Aenean sollicitudi, lobibendum auctor. Lorem ipsum
          dolor sit amet, conse auctor aliquet. Aenean sollicitudi, lobibendum auc
          sollicitudi, lobibendum auctor. Lorem ipsum dolor sit amet, conse auctor
          aliquet. Aenean sollicitudi, lobibendum auctor.Lorem ipsum dolor sit amet,
          conse auctor aliquet. Aenean sollicitudi, lobibendum auctor.
        </p>
        <div className="list-style5">
          <ul className="list-unstyled">
            <li>It is a long established fact that a reader will be</li>
            <li>There are many variations of passages</li>
            <li>All the Lorem Ipsum generators</li>
            <li>Asearch for 'lorem ipsum' will uncover many</li>
            <li>Catalysts for chang the Seamlessly</li>
            <li>Procedures whereas processes</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
