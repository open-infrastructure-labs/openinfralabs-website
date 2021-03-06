import React from 'react'


const VideoSection = class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
  
    render() {
  
      return (
        <React.Fragment>
          <section>
           <div className="latest-news-video">
            <div className="container">
                <div className="section-content">
                    <div className="video">
                        <div className="videoWrapper">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/gkcQrTp5Kks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="description">
                        <h3 className="article-small__title news-title">Latest News</h3>
                        <h4 className="article-small__entry">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere libero vitae molestie laoreet. Praesent tempor varius felis, vitae faucibus elit commodo eu. Quisque sapien nulla, sollicitudin nec felis quis, porta tempor libero. Donec et nisl id erat egestas molestie gravida et ante. Nulla ut cursus nunc. Maecenas eu metus ullamcorper, pharetra est porta, imperdiet metus.</h4>

                        <h4>
                        <a href="/community"><strong>Call to action goes here.</strong></a>
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
  
  export default VideoSection 
  