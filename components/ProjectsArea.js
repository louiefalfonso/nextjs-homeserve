import React from 'react'

export default function ProjectsArea() {
  return (
    <>
    <section className="project--layout2 z-index-common space-top space-extra-bottom overflow-hidden">
        <div className="project-element1 position-absolute z-index-n1">
            <img src="img/project/element-1.png" alt="Project" />
        </div>
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-8 mx-auto">
                <div className="title-area text-center">
                <span className="sec-icon">
                    <img src="img/icons/logo-icon.png" alt="icon" />
                </span>
                <span className="sec-subtitle2">OUR WORK SHOWCASE</span>
                <h2 className="sec-title">EXPLORE RECENT PROJECTS</h2>
                </div>
            </div>
            </div>
            <div className="row gx-0 align-items-center">
            <div className="col-lg-8 project__col">
                <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
                >
                <button
                    className="nav-link active project-tabbtn--style"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                >
                    <div className="project-tabbtn__number">01.</div>
                    <div className="project-tabbtn__content">
                    <span className="project-tabbtn__name">
                        North West Redwater Refinery
                    </span>
                    <span className="project-tabbtn__location">
                        LOCATION:<span>United State</span>
                    </span>
                    </div>
                </button>
                <button
                    className="nav-link project-tabbtn--style"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                >
                    <div className="project-tabbtn__number">02.</div>
                    <div className="project-tabbtn__content">
                    <span className="project-tabbtn__name">Road Construction</span>
                    <span className="project-tabbtn__location">
                        LOCATION:<span>United State</span>
                    </span>
                    </div>
                </button>
                <button
                    className="nav-link project-tabbtn--style"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                >
                    <div className="project-tabbtn__number">03.</div>
                    <div className="project-tabbtn__content">
                    <span className="project-tabbtn__name">
                        Atmosphere Affordable Housing
                    </span>
                    <span className="project-tabbtn__location">
                        LOCATION:<span>United State</span>
                    </span>
                    </div>
                </button>
                <button
                    className="nav-link project-tabbtn--style"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                >
                    <div className="project-tabbtn__number">04.</div>
                    <div className="project-tabbtn__content">
                    <span className="project-tabbtn__name">
                        The Boulevard at West River
                    </span>
                    <span className="project-tabbtn__location">
                        LOCATION:<span>United State</span>
                    </span>
                    </div>
                </button>
                </div>
            </div>
            <div className="col-lg-4 project__col">
                <div className="tab-content" id="v-pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                    tabIndex={0}
                >
                    <div className="project-banner">
                    <img src="img/project/project-h2-1.jpg" alt="project" />
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                    tabIndex={0}
                >
                    <div className="project-banner">
                    <img src="img/project/project-h2-2.jpg" alt="project" />
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                    tabIndex={0}
                >
                    <div className="project-banner">
                    <img src="img/project/project-h2-1.jpg" alt="project" />
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                    tabIndex={0}
                >
                    <div className="project-banner">
                    <img src="img/project/project-h2-2.jpg" alt="project" />
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="section-button d-flex justify-content-center">
            <a href="project.html" className="vs-btn">
                <span className="vs-btn__bar" />
                VIEW ALL PROJECTS
            </a>
            </div>
        </div>
    </section>
    </>
  )
}
