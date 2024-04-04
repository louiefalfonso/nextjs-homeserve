import React from 'react'

export default function BlogArea() {
  return (
    <>
    <section className="blog--layout1 z-index-common">
        <div className="blog__backlay position-absolute z-index-n1">
            <img src="img/blog/blog-backlay-1-1.jpg" alt="blog backlay" />
        </div>
        <div className="container">
            <div className="space-extra-bottom">
            <div className="row">
                <div className="col-xl-6 col-lg-8 mx-auto">
                <div className="title-area text-center">
                    <span className="sec-subtitle2">UPDATES AND NEWS</span>
                    <h2 className="sec-title">RECENT ARTICLES</h2>
                </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                <div className="vs-blog blog-style3">
                    <div className="blog-img">
                    <a href="blog-details.html">
                        <img
                        className="blog-img__img"
                        src="img/blog/blog-h-1-1.jpg"
                        alt="Blog Image"
                        />
                    </a>
                    </div>
                    <div className="blog-content">
                    <div className="blog-plus">
                        <a href="blog-details.html">
                        <i className="far fa-plus" />
                        </a>
                    </div>
                    <div className="blog-meta">
                        <span className="blog-date">JAN 24 2024</span>
                        <a className="blog-meta__cn" href="blog.html">
                        <i className="fal fa-comment-lines" />
                        14
                        </a>
                    </div>
                    <h2 className="blog-title">
                        <a href="blog-details.html">
                        How to Secure Funding for Your New Home at London
                        </a>
                    </h2>
                    <p className="blog-text">
                        Lorem ipsum dolor sit amet, coaliqu Aenean sollicitudi, lo bi We
                        reossible dolor sit ctor.
                    </p>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="vs-blog blog-style3">
                    <div className="blog-content">
                    <div className="blog-meta">
                        <span className="blog-date">FEB 24 2024</span>
                        <a className="blog-meta__cn" href="blog.html">
                        <i className="fal fa-comment-lines" />
                        14
                        </a>
                    </div>
                    <h2 className="blog-title">
                        <a href="blog-details.html">
                        How to Secure Funding for Your New Home at London
                        </a>
                    </h2>
                    <p className="blog-text">
                        Lorem ipsum dolor sit amet, coaliqu Aenean sollicitudi, lo bi We
                        reossible dolor sit ctor.
                    </p>
                    </div>
                    <div className="blog-img">
                    <div className="blog-plus">
                        <a href="blog-details.html">
                        <i className="far fa-plus" />
                        </a>
                    </div>
                    <a href="blog-details.html">
                        <img
                        className="blog-img__img"
                        src="img/blog/blog-h-1-2.jpg"
                        alt="Blog Image"
                        />
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="vs-blog blog-style3">
                    <div className="blog-img">
                    <a href="blog-details.html">
                        <img
                        className="blog-img__img"
                        src="img/blog/blog-h-1-3.jpg"
                        alt="Blog Image"
                        />
                    </a>
                    </div>
                    <div className="blog-content">
                    <div className="blog-plus">
                        <a href="blog-details.html">
                        <i className="far fa-plus" />
                        </a>
                    </div>
                    <div className="blog-meta">
                        <span className="blog-date">MAR 24 2024</span>
                        <a className="blog-meta__cn" href="blog.html">
                        <i className="fal fa-comment-lines" />
                        14
                        </a>
                    </div>
                    <h2 className="blog-title">
                        <a href="blog-details.html">
                        How to Secure Funding for Your New Home at London
                        </a>
                    </h2>
                    <p className="blog-text">
                        Lorem ipsum dolor sit amet, coaliqu Aenean sollicitudi, lo bi We
                        reossible dolor sit ctor.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="section-button d-flex justify-content-center text-center">
                <a href="blog.html" className="vs-btn style2" tabIndex={0}>
                <span className="vs-btn__bar" />
                VIEW ALL NEWS
                </a>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
