import React from 'react'


const LatestNews = class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
  
    render() {
  
      return (
        <React.Fragment>
          <section>
           <div id="latest-news-section" className="latest-news">
            <div className="container">
                <div className="section-content">

                    <div className="latest-news-description">
                        <h3 className="article-small__title news-title">More About the Announcement</h3>
                        <h4 className="article-small__entry">OpenInfra Foundation Platinum Member <a className="news-link" href="https://www.redhat.com/en/about/press-releases/red-hat-and-boston-university-announce-major-partnership-advance-open-hybrid-cloud-research-and-operations-scale">Red Hat is providing $551.9 million USD</a> in software subscriptions and resources to the Hariri Institute’s open research cloud initiative, in addition to $20 million to support research and deepen collaboration under the Red Hat Collaboratory at Boston University. This effort is creating a production research cloud that serves as the first, founding region in the OpenInfra Labs Cloud Network, which is envisioned to be a network of production clouds connecting open source projects to production. OpenInfra Labs will enable the cloud services and network deployed in this founding region to be replicated to other regions, federated between these regions and extended beyond academia.</h4>

                        <h4>
                        <a href="https://openinfrafoundation.formstack.com/forms/openinfra_labs_interest"><strong>Support OpenInfra Labs</strong></a>
                        </h4>

                    </div>
                </div>
            </div>
           </div>
          </section>
        </React.Fragment>
      )
    }
  }
  
  export default LatestNews 
  