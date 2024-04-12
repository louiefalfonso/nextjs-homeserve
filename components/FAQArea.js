import React from 'react'

export default function FAQArea() {
  return (
    <>
    <section className="vsfaqs--layout1 space-top space-extra-bottom z-index-common">
        <div className="vsfaqs__img1">
            <img src="img/faq/faq-1-3.png" alt="" />
        </div>
        <div className="container">
            <div className="row gx-60">
            <div className="col-lg-6">
                <span className="sec-subtitle2">BIGGER, BETTER, FASTER</span>
                <h2 className="sec-title">LEADERSHIP IN THE CONSTRUCTION</h2>
                <div className="vsfaqs-accordion">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        >
                        <span className="accordion-button__number">1</span>Early
                        Engagement
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        Lorem ipsum dolor sit amet, conse auctor aliquet Aene
                        sollicitudi, lobibendum auctor.Lorem ipsum dolor sit am et,
                        conse auctor aliquet.
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        >
                        <span className="accordion-button__number">2</span>Factory
                        Manufacture
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        Lorem ipsum dolor sit amet, conse auctor aliquet Aene
                        sollicitudi, lobibendum auctor.Lorem ipsum dolor sit am et,
                        conse auctor aliquet.
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        >
                        <span className="accordion-button__number">3</span>Metal
                        Engineering
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        Lorem ipsum dolor sit amet, conse auctor aliquet Aene
                        sollicitudi, lobibendum auctor.Lorem ipsum dolor sit am et,
                        conse auctor aliquet.
                        </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                        >
                        <span className="accordion-button__number">4</span>Roof
                        Renovation
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                        Lorem ipsum dolor sit amet, conse auctor aliquet Aene
                        sollicitudi, lobibendum auctor.Lorem ipsum dolor sit am et,
                        conse auctor aliquet.
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="vsfaqs-img">
                <div className="vsfaqs-img__img1">
                    <img src="img/faq/faq-1-1.jpg" alt="faq 1" />
                </div>
                <div className="vsfaqs-img__img2">
                    <img src="img/faq/faq-1-2.jpg" alt="faq 1" />
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
