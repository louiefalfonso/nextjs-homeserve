import React from 'react'
import Image from 'next/image'

export default function NewsletterArea() {
  return (
    <>
    <div className="project-estimate2 position-relative me-0" data-bg-src="img/textures/estimate-texures-2.png">
        <div className="project-estimate__img">
            <Image src="/img/project/project-img-3.png" alt="Project" width={752} height={494} priority />
        </div>
        <div className="container">
            <div className="project-title2">
            <div className="icon">
                <img src="img/icons/paper-plane.svg" alt="paper plane" />
            </div>
            <div>
                <h2 className="sec-title3 mb-1">JOIN NEWSLETTER</h2>
                <p className="sec-text2 mw-100">
                Subscribe and get latest news and updates or tips offers.
                </p>
                <form className="subs-form" action="mail.php">
                <input
                    className="subs-form__field"
                    placeholder="Email address."
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                />
                <button className="vs-btn subs-form__btn" tabIndex={0} type="button">
                    <span className="vs-btn__bar" />
                    SUBSCRIBE
                </button>
                </form>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
