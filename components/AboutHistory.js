import React from 'react'

export default function AboutHistory() {
  return (
    <>
    <section className="space-top space-extra-bottom z-index-common overflow-hidden">
        <div className="element--history position-absolute bottom-0 z-index-n1">
            <img src="img/about/ab-4-1.png" alt="about" />
        </div>
        <div className="container">
            <div className="row align-items-end justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="title-area">
                    <span className="sec-subtitle2">COMPANY HISTORY</span>
                    <h2 className="sec-title">
                        A TEAM OF RELIABLE AND EXPERIENCED CONTRACTORS
                    </h2>
                    </div>
                    <div className="history-style d-flex align-items-start">
                    <div
                        className="nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <button
                        className="nav-link active"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                        >
                        1990
                        </button>
                        <button
                        className="nav-link"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                        >
                        2010
                        </button>
                        <button
                        className="nav-link"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                        >
                        2010
                        </button>
                        <button
                        className="nav-link"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                        >
                        2018
                        </button>
                        <button
                        className="nav-link"
                        id="v-pills-2022-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-2022"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-2022"
                        aria-selected="false"
                        >
                        2022
                        </button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div
                        className="tab-pane fade show active"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                        tabIndex={0}
                        >
                        <div className="history-block">
                            <h3 className="history-block__title">
                            Provide Guaranteed Quality in Construction
                            </h3>
                            <p className="history-block__text">
                            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed
                            do eiusmod tempor incididunt ut dolore magna aliqua.
                            </p>
                            <span className="history-block__year">1990</span>
                        </div>
                        </div>
                        <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                        tabIndex={0}
                        >
                        <div className="history-block">
                            <h3 className="history-block__title">
                            Provide Guaranteed Quality in Construction
                            </h3>
                            <p className="history-block__text">
                            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed
                            do eiusmod tempor incididunt ut dolore magna aliqua.
                            </p>
                            <span className="history-block__year">2010</span>
                        </div>
                        </div>
                        <div
                        className="tab-pane fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                        tabIndex={0}
                        >
                        <div className="history-block">
                            <h3 className="history-block__title">
                            Provide Guaranteed Quality in Construction
                            </h3>
                            <p className="history-block__text">
                            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed
                            do eiusmod tempor incididunt ut dolore magna aliqua.
                            </p>
                            <span className="history-block__year">2010</span>
                        </div>
                        </div>
                        <div
                        className="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                        tabIndex={0}
                        >
                        <div className="history-block">
                            <h3 className="history-block__title">
                            Provide Guaranteed Quality in Construction
                            </h3>
                            <p className="history-block__text">
                            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed
                            do eiusmod tempor incididunt ut dolore magna aliqua.
                            </p>
                            <span className="history-block__year">2018</span>
                        </div>
                        </div>
                        <div
                        className="tab-pane fade"
                        id="v-pills-2022"
                        role="tabpanel"
                        aria-labelledby="v-pills-2022-tab"
                        tabIndex={0}
                        >
                        <div className="history-block">
                            <h3 className="history-block__title">
                            Provide Guaranteed Quality in Construction
                            </h3>
                            <p className="history-block__text">
                            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed
                            do eiusmod tempor incididunt ut dolore magna aliqua.
                            </p>
                            <span className="history-block__year">2022</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-8 col-md-9">
                    <div className="history-img">
                    <img src="img/about/ab-4-2.jpg" alt="about" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
