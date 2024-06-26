import React from 'react'
import Image from 'next/image'

export default function AboutArea() {
  return (
    <>
    <section className="space-top space-extra-bottom z-index-common overflow-hidden">
        <div className="about-overlay--style2 position-absolute start-0 bottom-0">
            <Image src="/img/about/ab-2-4.png" alt="HomeServe" width={1176} height={926} priority/>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-lg-8 mx-auto">
                <div className="title-area text-center">
                <span className="sec-icon">
                    <Image src="/img/logo-homeserve.png" alt="HomeServe" width={170 } height={55} priority/>
                </span>
                <span className="sec-subtitle2">WELCOME TO OUR COMPANY</span>
                <h2 className="sec-title">
                    WE ARE QUALIFIED IN EVERY WORKING DEPARTMENTS
                </h2>
                </div>
            </div>
            </div>
            <div className="row gx-60">
            <div className="col-lg-6">
                <div className="img-box1--style2">
                <div className="img-box1__left">
                    <div className="img-box1__img1">
                        <Image src="/img/about/ab-2-1.jpg" alt="HomeServe" width={270} height={252} priority/>
                    </div>
                    <div className="counter-box--style1">
                    <span className="counter-box__number">3526</span>
                    <h3 className="counter-box__title">STARTED JOURNEY</h3>
                    </div>
                </div>
                <div className="img-box1__right">
                    <div className="img-box1__img2">
                        <Image src="/img/about/ab-2-2.jpg" alt="HomeServe" width={270} height={165} priority/>
                    </div>
                    <div className="img-box1__img3">
                        <Image src="/img/about/ab-2-3.jpg" alt="HomeServe" width={270} height={290} priority/>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-content">
                <span className="sec-subtitle5">WHO WE ARE?</span>
                <p className="sec-text">
                    We successfully cope with tasks of varying complexity, provide
                    long-term guarantees and regularly master new technologies. Our
                    portfolio includes dozens of successfully completed projects of
                    houses.
                </p>
                <span className="sec-subtitle5">WHAT WE DO!</span>
                <div className="list-style4">
                    <ul className="list-unstyled">
                    <li>Geographical diversity, project complexity</li>
                    <li>Whether building on land or over water</li>
                    <li>Construction companies respond to the unique needs</li>
                    <li>Emerjency Solution Anytime</li>
                    </ul>
                </div>
                <div className="signature-box--style1">
                    <div className="signature-box__img">
                        <Image src="/img/about/avatar-2-1.jpg" alt="HomeServe" width={70} height={70} priority/>
                    </div>
                    <div className="signature-box__content">
                    <h4 className="signature-box__title">Rodja Hartmann</h4>
                    <span className="signature-box__desig">Director of Company</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
