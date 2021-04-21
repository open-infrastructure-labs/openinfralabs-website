import React from 'react'

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
              <div className="hero-content">

              <div className="hero-video-text">
                <h1 className="hero-title">TITLE</h1>
                <div className="hero-subhead">
                  SUBHEAD
                </div>
                <div className="hero-actions">
                      <a href="" className="button is-primary">
                        <span>BUTTON TEXT</span> <span className="ico">
                          <img src={leftArrow} alt="Learn More" style={({ filter: 'invert(36%) sepia(45%) saturate(953%) hue-rotate(170deg) brightness(98%) contrast(86%)' }, { WebkitFilter: 'invert(36%) sepia(45%) saturate(953%) hue-rotate(170deg) brightness(98%) contrast(86%)' })} />
                        </span>
                      </a>
                </div>
                </div>
        
                <div className="video">
                        <div className="videoWrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/gkcQrTp5Kks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

              </div>
            </div>
          </div>
        </section>
        </React.Fragment>
      )
  }
}

export default HeaderVideo