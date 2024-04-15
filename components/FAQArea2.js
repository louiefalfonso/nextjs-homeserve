import React from 'react'
import Image from 'next/image'

export default function FAQArea2() {
  return (
    <>
    <section className="vsfaqs--layout1 space-extra-bottom z-index-common">
        <div className="container">
            <div className="row">
            <div className="col-lg-8 mx-auto">
                <div className="title-area text-center">
                <span className="sec-icon">
                    <Image src="/img/logo-homeserve.png" alt="HomeServe" width={170} height={55} priority/>
                </span>
                <span className="sec-subtitle2">HELPFUL FAQ’S</span>
                <h2 className="sec-title">EFFECTIVE SOLITION</h2>
                </div>
            </div>
            </div>
            <div className="vsfaqs-accordion2">
            <div className="accordion" id="accordionExample3">
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
                    What are the problems in construction of building?
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample3"
                >
                    <div className="accordion-body">
                    Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio
                    tincdunt ilm auctor Class aptensociosqu a ds Etiam ante ex
                    fermentum litora aorquper conuauris ine odi. Duis sed odio sit
                    amet nibh vulputate cursus a sit tellus a odi iam ante ex
                    fermentum litora aorquper conuauris ine odi.
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
                    What are the 6 steps of construction?
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample3"
                >
                    <div className="accordion-body">
                    Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio
                    tincdunt ilm auctor Class aptensociosqu a ds Etiam ante ex
                    fermentum litora aorquper conuauris ine odi. Duis sed odio sit
                    amet nibh vulputate cursus a sit tellus a odi iam ante ex
                    fermentum litora aorquper conuauris ine odi.
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
                    What are the 4 types of construction work?
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample3"
                >
                    <div className="accordion-body">
                    Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio
                    tincdunt ilm auctor Class aptensociosqu a ds Etiam ante ex
                    fermentum litora aorquper conuauris ine odi. Duis sed odio sit
                    amet nibh vulputate cursus a sit tellus a odi iam ante ex
                    fermentum litora aorquper conuauris ine odi.
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
                    What are the 7 steps of construction?
                    </button>
                </h2>
                <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample3"
                >
                    <div className="accordion-body">
                    Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio
                    tincdunt ilm auctor Class aptensociosqu a ds Etiam ante ex
                    fermentum litora aorquper conuauris ine odi. Duis sed odio sit
                    amet nibh vulputate cursus a sit tellus a odi iam ante ex
                    fermentum litora aorquper conuauris ine odi.
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    >
                    Preconstruction &amp; Procurement?
                    </button>
                </h2>
                <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample3"
                >
                    <div className="accordion-body">
                    Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio
                    tincdunt ilm auctor Class aptensociosqu a ds Etiam ante ex
                    fermentum litora aorquper conuauris ine odi. Duis sed odio sit
                    amet nibh vulputate cursus a sit tellus a odi iam ante ex
                    fermentum litora aorquper conuauris ine odi.
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
