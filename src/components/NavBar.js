import React from 'react'
import LinkComponent from './LinkComponent'
import data from "../content/nav-bar.json"

const NavBar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    if (data.navBar.length > 0 && data.navBar.some((element) => element.display === true)) {
      return (
        <nav className="nav navbar is-transparent" role="navigation" aria-label="main-navigation">
          <div className="">
            <div className="nav-inner">              
              <div className="nav-brand">
                <a href="/" title="Logo">
                  <img src="img/icon.png" alt="Logo" style={{width: '40px'}}/>
                </a>
                {/* Hamburger menu */}              
              </div>
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                id="navMenu"
                className={`nav-content ${this.state.navBarActiveClass}`}
              >
                <ul className="nav-menu nobullet navbar-start has-text-centered">
                  {data.navBar.map((li, index) => {
                    if(li.display) {
                      return (
                        <React.Fragment>
                          <li><a href={li.link}>{li.text}</a></li>
                          {index + 1 < data.navBar.length ? <span>|</span> : null}
                        </React.Fragment>
                      )
                    }                    
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )
    } else {
      return null;
    }

  }
}

export default NavBar
