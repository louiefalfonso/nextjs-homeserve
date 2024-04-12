import React from 'react'

export default function RequestQuote() {
  return (
    <>
    <div className="quote--layout1 z-index-common overflow-hidden" data-bg-src="img/bg/bg-1.jpg">
        <div className="quote__shape position-absolute start-0 top-0 bottom-0 z-index-n1">
            <svg width={929} height="771.999" viewBox="0 0 929 771.999">
            <path
                id="Rectangle_523_copy"
                data-name="Rectangle 523 copy"
                d="M0,7286H636.73L929,8058,0,8056Z"
                transform="translate(0 -7286)"
                fill="#e62419"
            />
            </svg>
        </div>
        <div className="quote__img position-absolute bottom-0">
            <img src="img/quote/quote-img-1.png" alt="quote-img-1" />
        </div>
        <div className="container">
            <div className="row">
            <div className="col-lg-8">
                <form
                action="#"
                className="form--style2 z-index-common"
                data-bg-src="img/textures/quote-textures.svg"
                >
                <div className="position-absolute end-0 bottom-0">
                    <svg width="464.008" height={109} viewBox="0 0 464.008 109">
                    <g transform="translate(-628.996 -7868)">
                        <path
                        d="M720.131,7896.7l62.8,24.918-123.266,35.4-22.9,5.87Z"
                        fill="#f0f0f0"
                        />
                        <path
                        id="Rectangle_2_copy"
                        data-name="Rectangle 2 copy"
                        d="M991.469,7868,1093,7976.163,700.318,7977,629,7975.375Z"
                        fill="#f0f0f0"
                        />
                    </g>
                    </svg>
                </div>
                <span className="sec-subtitle">GET IN TOUCH</span>
                <h2 className="sec-title mb-1">REQUEST A QUOTE</h2>
                <p className="sec-text">
                    To get the cost estimation of your house please select from the
                    following:
                </p>
                <div className="row gx-20">
                    <div className="col-md-12 form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Complete Name"
                    />
                    </div>
                    <div className="col-md-6 form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                    />
                    </div>
                    <div className="col-md-6 form-group">
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone No"
                    />
                    </div>
                    <div className="col-12 form-group">
                    <select name="area" id="area" className="form-select">
                        <option value="" disabled="" selected="">
                        Select Service
                        </option>
                        <option value="area1">Roof Maintaince</option>
                        <option value="area2">Roof Maintaince</option>
                        <option value="area3">Roof Maintaince</option>
                        <option value="area4">Roof Maintaince</option>
                        <option value="area5">Roof Maintaince</option>
                    </select>
                    </div>
                    <div className="col-12 form-group">
                    <a href="#" className="vs-btn" tabIndex={0}>
                        <span className="vs-btn__bar" />
                        SUBMIT NOW
                    </a>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
