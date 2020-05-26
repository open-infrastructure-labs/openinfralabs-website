import React from 'react'
import content from '../content/top-bar.json'
import LinkComponent from './LinkComponent'

const TopBar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }  

  render() {

    if(content.bar && content.bar.display) {
      return (
        <div className="header">
          <div className="bar is-dark-gray">
            <div className="container">
              <div className="bar-inner">              
                <div className="bar-entry">
                  <p>{content.bar.text}</p>
                </div> 
                <LinkComponent href={content.bar.link} className="bar-btn">{content.bar.button}</LinkComponent>
              </div>
            </div>
          </div>
        </div>
      )    
    } else {
      return null;
    }    
  }
}

export default TopBar
