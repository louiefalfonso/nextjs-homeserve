import React from 'react'
import Image from 'next/image'

export default function ContactArea() {
  return (
    <>
    <div className="contact space-top">
        <div className="container">
            <div className="row">
            <div className="col-lg-8 mx-auto">
                <div className="title-area text-center">
                <span className="sec-icon">
                    <Image src="/img/logo-homeserve.png" alt="HomeServe" width={170} height={55} priority/>
                </span>
                <span className="sec-subtitle2">KEEP IN TOUCH</span>
                <h2 className="sec-title">PLEASE DO NOT HESITATE TO CONTACT US</h2>
                </div>
            </div>
            </div>
            <div className="contact__wrapper">
            <div className="row gx-60">
                <div className="col-lg-7">
                <form
                    action="mail.php"
                    method="post"
                    className="form--contact ajax-contact z-index-common"
                >
                    <h2 className="sec-title">SEND US A MESSAGE</h2>
                    <p className="sec-text">Feel some love, to see what we can do...</p>
                    <div className="row gx-20">
                    <div className="col-12 col-md-8 col-lg-12 form-group">
                        <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Complete Name"
                        required=""
                        />
                        <div className="form-icon">
                        <img src="img/icons/ct-icon-1.svg" alt="ct icon 1" />
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-12 form-group">
                        <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required=""
                        />
                        <div className="form-icon">
                        <img src="img/icons/ct-icon-2.svg" alt="ct icon 1" />
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-12 form-group">
                        <input
                        name="phone"
                        type="tel"
                        className="form-control"
                        placeholder="Phone No"
                        required=""
                        />
                        <div className="form-icon">
                        <img src="img/icons/ct-icon-3.svg" alt="ct icon 1" />
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-12 form-group">
                        <textarea
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                        />
                        <div className="form-icon">
                        <img src="img/icons/ct-icon-4.svg" alt="ct icon 1" />
                        </div>
                    </div>
                    <div className="col-12 form-group">
                        <button className="vs-btn style3" type="submit">
                        <span className="vs-btn__bar" />
                        SEND MESSAGE
                        </button>
                    </div>
                    </div>
                </form>
                <p className="form-messages mb-0 mt-3" />
                </div>
                <div className="col-lg-5">
                <div className="contact__info">
                    <h4 className="text-white mb-4">INFORMATION</h4>
                    <div>
                    <div className="footer-info--style5">
                        <div className="footer-info_icon">
                        <i>
                            <img
                            src="img/icons/phone-info.svg"
                            alt="phone-info"
                            />
                        </i>
                        </div>
                        <div className="media-body">
                        <span className="footer-info_label">Phone No:</span>
                        <div className="footer-info_link">
                            <a href="tel:+254982156213">+254 (98) 2156 213</a>
                        </div>
                        </div>
                    </div>
                    <div className="footer-info--style5">
                        <div className="footer-info_icon">
                        <i>
                            <img
                            src="img/icons/open-mail-info.svg"
                            alt="open-email-info"
                            />
                        </i>
                        </div>
                        <div className="media-body">
                        <span className="footer-info_label">Email Address:</span>
                        <div className="footer-info_link">
                            <a href="tel:+254982156213">username@domain.com</a>
                        </div>
                        </div>
                    </div>
                    <div className="footer-info--style5">
                        <div className="footer-info_icon">
                        <i>
                            <img
                            src="img/icons/location-info.svg"
                            alt="location info"
                            />
                        </i>
                        </div>
                        <div className="media-body">
                        <div className="footer-info_link">
                            380 St Kilda Road, Jackson New Store, United State
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="social-style">
                    <ul>
                        <li>
                        <a href="facebook.com">
                            <i className="fab fa-facebook" />
                        </a>
                        </li>
                        <li>
                        <a href="facebook.com">
                            <i className="fab fa-twitter" />
                        </a>
                        </li>
                        <li>
                        <a href="facebook.com">
                            <i className="fab fa-linkedin" />
                        </a>
                        </li>
                        <li>
                        <a href="facebook.com">
                            <i className="fab fa-instagram" />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
