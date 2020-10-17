import React from 'react'
import content from '../content/footer-nav.json'

import OSFLogo from '../../static/img/OpenInfrastructureFoundation-logo-RGB-horiz2.svg'

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
          <a href="https://openinfra.dev/">
          <div className="support-content-logo" title="OIF Logo" aria-label="OIF Logo"></div>
          </a>
          {/* Render logo using HTML  
          <a href="https://openinfra.dev/">
            <img className="osf-logo" src={OIF} width='250px' alt="OIF Logo" /></a>*/} 
            <div className="support-content-info">
              {content.productName} is a open infrastructure project supported by the <a className="osf-link" href={"https://openinfra.dev/"}>OIF</a>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default SupportBanner
