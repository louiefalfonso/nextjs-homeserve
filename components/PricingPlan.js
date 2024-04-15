import React from 'react'
import Link from 'next/link'

export default function PricingPlan() {
  return (
    <>
    <div className="price space-top space-extra-bottom">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
                <div className="price-block--style">
                <div className="price-block__body">
                    <div
                    className="price-block__header"
                    data-bg-src="img/textures/price-textures.svg"
                    >
                    <span className="price-block__name">Basic Plan</span>
                    <span className="price-block__price">
                        <span>
                        $150<span>.00</span>
                        </span>
                        <sub>/per monthly</sub>
                    </span>
                    <div className="price-block__header--bottom">
                        <span className="price-block__icon">
                        <img
                            src="img/icons/price-icon-1.svg"
                            alt="pricing icon one"
                        />
                        </span>
                    </div>
                    </div>
                    <div className="price-block__content">
                    <ul>
                        <li>High-Quality</li>
                        <li>Advanced Structural</li>
                        <li>Efficient HVAC </li>
                        <li>Eco-Friendly </li>
                        <li>Accessible Design</li>
                        <li>Energy-Efficient </li>
                        <li>Durable Exterior </li>
                        <li>Modern Architectural </li>
                        <li>Sustainable Building </li>
                        <li>Green Roofing </li>
                        <li>Smart Home Automation </li>
                        <li>Renewable (Solar, Wind)</li>
                        <li>Water-Saving </li>
                        <li>Weather-Resistant</li>
                        <li>Safe and Secure</li>
                        <li>Fire-Retardant</li>
                        <li>Seismic-Resistant</li>
                        <li>Low-Maintenance</li>
                        <li>Noise-Reducing</li>
                    </ul>
                    <Link href="/" passHref className="vs-btn style2" tabIndex={0}>
                        <span className="vs-btn__bar" />
                        PURCHASE NOW
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="price-block--style">
                <div className="price-block__body">
                    <div
                    className="price-block__header"
                    data-bg-src="img/textures/price-textures.svg"
                    >
                    <span className="price-block__name">Basic Plan</span>
                    <span className="price-block__price">
                        <span>
                        $230<span>.00</span>
                        </span>
                        <sub>/per monthly</sub>
                    </span>
                    <div className="price-block__header--bottom">
                        <span className="price-block__icon">
                        <img
                            src="img/icons/price-icon-2.svg"
                            alt="pricing icon one"
                        />
                        </span>
                    </div>
                    </div>
                    <div className="price-block__content">
                    <ul>
                        <li>High-Quality </li>
                        <li>Professional Services</li>
                        <li>Fire and Safety </li>
                        <li>Comprehensive </li>
                        <li>Efficient Water Heating </li>
                        <li>Integrated Pest Control</li>
                        <li>Energy-Efficient </li>
                        <li>Adaptable Interior </li>
                        <li>Modern Kitchen </li>
                        <li>Luxurious Bathroom</li>
                        <li>Accessible Elevator</li>
                        <li>Custom Cabinetry</li>
                        <li>High-Speed Internet</li>
                        <li>Automated Irrigation</li>
                        <li>Multi-Zone Climate</li>
                        <li>Smart Water Management</li>
                        <li>Emergency Backup</li>
                        <li>Efficient Waste</li>
                        <li>Advanced Security</li>
                    </ul>
                    <Link href="/" passHref className="vs-btn style2" tabIndex={0}>
                        <span className="vs-btn__bar" />
                        PURCHASE NOW
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="price-block--style">
                <div className="price-block__body">
                    <div
                    className="price-block__header"
                    data-bg-src="img/textures/price-textures.svg"
                    >
                    <span className="price-block__name">Basic Plan</span>
                    <span className="price-block__price">
                        <span>
                        $320<span>.00</span>
                        </span>
                        <sub>/per monthly</sub>
                    </span>
                    <div className="price-block__header--bottom">
                        <span className="price-block__icon">
                        <img
                            src="img/icons/price-icon-3.svg"
                            alt="pricing icon one"
                        />
                        </span>
                    </div>
                    </div>
                    <div className="price-block__content">
                    <ul>
                        <li>Adaptable Interior </li>
                        <li>Modern Kitchen </li>
                        <li>Luxurious Bathroom </li>
                        <li>Accessible Elevator </li>
                        <li>Custom Cabinetry</li>
                        <li>High-Speed Internet </li>
                        <li>Advanced Soundproofing </li>
                        <li>Automated Irrigation</li>
                        <li>Multi-Zone Climate</li>
                        <li>Smart Water</li>
                        <li>Emergency Backup</li>
                        <li>Efficient Waste</li>
                        <li>Advanced Security </li>
                        <li>Stylish Interior</li>
                        <li>Efficient Use</li>
                        <li>Energy-Efficient </li>
                        <li>Customizable Lighting </li>
                        <li>Comfortable </li>
                        <li>High-Quality Flooring </li>
                    </ul>
                    <Link href="/" passHref className="vs-btn style2" tabIndex={0}>
                        <span className="vs-btn__bar" />
                        PURCHASE NOW
                    </Link>
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
