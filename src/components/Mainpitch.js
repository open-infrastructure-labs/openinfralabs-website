import React from 'react'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Mainpitch = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    let { mainpitch: { title, description, display, image, link } } = this.props;
    if (display) {
      return (
        <React.Fragment>
          <section className="section-article">
            <div className="container">
              <article className="article level">
                {image &&
                  <figure className="article-image level-item level-right">
                    <div>
                      <a href={link}>
                        <Zoom>
                          <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt={title} />
                        </Zoom>
                      </a>
                    </div>
                  </figure>
                }
                <div className="article-content">
                  <div className="article__entry">
                    <h2 id="about-template">
                      <a href="#about-template" aria-hidden="true" className="header-anchor">#</a>
                      {title}
                    </h2>
                    <div className="about-section">
                      <div className= "intro-paragraph">
                        <h4>We are focused on delivering open source tools to build and run cloud, container, AI, big data and edge workloads efficiently, repeatedly and predictably. Our projects embrace three themes:</h4>

                        <h4><strong>Operate First</strong> - helping developers gain insights into operational considerations and ensure their projects will integrate and operate well in production environments.</h4>
            
                        <h4><strong>Low-Code Development</strong> - enabling developers to build production-grade AI and big data applications without specialized skills and with a minimal level of coding.</h4>

                        <h4><strong>Optimized Infrastructure</strong> - delivering infrastructure innovations to improve the performance of emerging workloads without burdening application developers.</h4>
                        {description.map((desc, index) => {
                          return (
                            <h4 key={index}>
                              {desc.text} <a href="/community"><strong>Find more on our projects here</strong></a>.
                            </h4>
                          )
                        })}
                      </div>

                      <div className="diagram">
                      
                      </div>
                    </div> 
                  </div>
                </div>
              </article>
            </div>
          </section>
        </React.Fragment>
      )
    } else {
      return null;
    }

  }
}

export default Mainpitch
