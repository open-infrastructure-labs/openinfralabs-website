import React from 'react'
import OIFLogo from '../img/svg/OpenInfra-logo-white.svg'
import leftArrow from '../img/svg/arrow-left.svg'

const HeaderVideo = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {

      return (
        <React.Fragment>
        <section className="hero-video-main hero hero-image">
          <div className="hero-body">
            <div className="container">
              <div className="hero-video-content">

              <div className="hero-video-text hl-is-centered">
              
                <h1 className="hero-title">First OpenInfra Labs Region Gains Momentum</h1>
                <h4 className="hero-video-subhead">
                Red Hat provided $551.9 million in software subscriptions to support the first region of the OpenInfra Labs Cloud Network. The community is looking for additional companies who are interested in investing to accelerate the first region, help lead the effort to replicate and expand it to other regions, and participate in defining the rules for the federated open infrastructure cloud.
                </h4>

                  <div className="hero-actions">
                    <a href="https://openinfrafoundation.formstack.com/forms/openinfra_labs_interest" className="button is-primary">
                    <span>GET INVOLVED</span> <span className="ico">
                      <img src={leftArrow} alt="Learn More" style={({ filter: 'invert(36%) sepia(45%) saturate(953%) hue-rotate(170deg) brightness(98%) contrast(86%)' }, { WebkitFilter: 'invert(36%) sepia(45%) saturate(953%) hue-rotate(170deg) brightness(98%) contrast(86%)' })} />
                      </span>
                    </a>
                    <a href="/#latest-news-section" className="button read-more">
                    <span>READ more</span> <span className="ico">
                      <img className="downArrow" src={leftArrow} alt="Learn More"/>
                      </span>
                    </a>
                  </div>
                </div>
                {/*
                <div className="video-hero">
                  <div className="videoWrapper">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gkcQrTp5Kks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                */}
              </div>

              <div className="foundation-callout">OpenInfra Labs is an initiative of <a href="https://openinfra.dev/"><img className="foundation-callout-logo" src={OIFLogo} alt="Open Infrastructure Foundation Logo"  /></a></div>

            </div>
          </div>
        </section>
        </React.Fragment>
      )
  }
}

export default HeaderVideo