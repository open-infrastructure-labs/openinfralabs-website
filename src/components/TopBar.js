import React from 'react'
import LinkComponent from './LinkComponent'
import data from '../content/top-bar.json'

const TopBar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }  

  render() {

    if(data.topBar && data.topBar.display) {
      return (
        <div className="header">
          <div className="bar is-dark-gray">
            <div className="container">
              <div className="bar-inner">              
                <div className="bar-entry">
                  <p>{data.topBar.text}</p>
                </div> 
                <LinkComponent href={data.topBar.link} className="bar-btn">{data.topBar.button}</LinkComponent>
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
