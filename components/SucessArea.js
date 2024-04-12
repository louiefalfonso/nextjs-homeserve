import React from 'react'

export default function SucessArea() {
  return (
    <>
    <section className="sucess--layout1 z-index-common space-top" data-bg-src="img/bg/bg-2.jpg">
        <div className="sucess__overlay" />
        <div className="sucess__shape" />
        <div className="sucess__element1 position-absolute top-0 start-0 z-index-n1">
            <svg width="537.549" height="430.304" viewBox="0 0 537.549 430.304">
            <g transform="translate(0 -4705)">
                <path
                d="M310.6,5135.3,152.516,4998.368,462.806,4803.84l57.633-32.263Z"
                fill="#fc6601"
                />
                <path d="M0,4705H537.549L0,5052.363Z" fill="#fc6601" />
            </g>
            </svg>
        </div>
        <div className="sucess__element2 position-absolute bottom-0 end-0 z-index-n1">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="573.813"
            height="719.464"
            viewBox="0 0 573.813 719.464"
            >
            <path
                id="Path_3"
                data-name="Path 3"
                d="M1920,3514.536V4234H1346.188Z"
                transform="translate(-1346.188 -3514.536)"
                fill="#fc6601"
            />
            </svg>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-xl-8 col-lg-6 mx-auto">
                <div className="title-area text-center">
                <span className="sec-subtitle2 text-white">
                    COVERING ARCHITECTURAL DESIGN
                </span>
                <h2 className="sec-titlexh1 text-white">
                    YOUR <span className="highlight">RENOVATION</span> STARTS HERE
                </h2>
                <a href="project-details.html" className="vs-btn" tabIndex={0}>
                    <span className="vs-btn__bar" />
                    START CONSULTING
                </a>
                </div>
            </div>
            </div>
            <div className="row gx-0">
            <div className="col-lg-4 col-md-6">
                <div
                className="sucess-block--style1"
                data-bg-src="img/textures/sucess-bg-1.svg"
                >
                <div className="sucess-block__icon">
                    <img src="img/icons/sucess-icon-1.svg" alt="sucess icon 1" />
                </div>
                <div className="sucess-block__number">
                    <span>80</span> Million SQFT
                    <sup>Over</sup>
                </div>
                <p className="sucess-block__text">of Industrial space delivered.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div
                className="sucess-block--style1"
                data-bg-src="img/textures/sucess-bg-1.svg"
                >
                <div className="sucess-block__icon">
                    <img src="img/icons/sucess-icon-2.svg" alt="sucess icon 1" />
                </div>
                <div className="sucess-block__number">
                    <span>8,000</span> multi-room
                    <sup>Over</sup>
                </div>
                <p className="sucess-block__text">of Industrial space delivered.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div
                className="sucess-block--style1"
                data-bg-src="img/textures/sucess-bg-1.svg"
                >
                <div className="sucess-block__icon">
                    <img src="img/icons/sucess-icon-3.svg" alt="sucess icon 1" />
                </div>
                <div className="sucess-block__number">
                    <span>100</span> Kilometters
                    <sup>Over</sup>
                </div>
                <p className="sucess-block__text">of Industrial space delivered.</p>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
