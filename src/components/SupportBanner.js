import React from 'react'
import content from '../content/footer-nav.json'

import OSFLogo from '../../static/img/osf-logo-outline.svg'

const SupportBanner = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <React.Fragment>
        <hr />
        <section>
          <div className="support-content">
          {/* Render logo using CSS */}
          <a href="https://osf.dev/">
          <div className="support-content-logo" title="OSF Logo" aria-label="OSF Logo"></div>
          </a>
          {/* Render logo using HTML  
          <a href="https://osf.dev/">
            <img className="osf-logo" src={OSFLogo} width='250px' alt="OSF Logo" /></a>*/} 
            <div className="support-content-info">
              {content.productName} is a open infrastructure project supported by the <a className="osf-link" href={"https://osf.dev/"}>OSF</a>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default SupportBanner
