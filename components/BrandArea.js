import React from 'react'

export default function BrandArea() {
  return (
    <>
    <div className="brand--layout2 space-top space-extra-bottom">
        <div className="container">
            <div className="position-relative z-index-common">
            <div
                className="vs-carousel"
                data-dots="false"
                data-slide-show={5}
                data-lg-slide-show={3}
                data-md-slide-show={3}
                data-sm-slide-show={2}
                data-xs-slide-show={1}
                data-center-mode="true"
                data-arrows="false"
            >
                <div>
                <div className="brand-style">
                    <img src="img/brand/1.png" alt="brand" />
                </div>
                </div>
                <div>
                <div className="brand-style">
                    <img src="img/brand/2.png" alt="brand" />
                </div>
                </div>
                <div>
                <div className="brand-style">
                    <img src="img/brand/3.png" alt="brand" />
                </div>
                </div>
                <div>
                <div className="brand-style">
                    <img src="img/brand/4.png" alt="brand" />
                </div>
                </div>
                <div>
                <div className="brand-style">
                    <img src="img/brand/5.png" alt="brand" />
                </div>
                </div>
                <div>
                <div className="brand-style">
                    <img src="img/brand/1.png" alt="brand" />
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    </>
  )
}
