import React from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import blogConfig from '../../content/blog-config.json'
import metadata from '../../content/site-metadata.json'
import LinkComponent from '../../components/LinkComponent'

export default class BlogIndexPage extends React.Component {

  
  render() {
    const {filter} = this.props;
    return (
      <Layout>
        <main className="home-blog">
          {blogConfig && 
          <Helmet title={blogConfig.title ? blogConfig.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>        
            {blogConfig.subTitle && <meta name="description" content={blogConfig.subTitle} />}            
            {blogConfig.title && <meta property="og:title" content={blogConfig.title} />}
            {blogConfig.subTitle && (
              <meta property="og:description" content={blogConfig.subTitle} />
            )}             
            <meta name="twitter:card" content="summary_large_image" />            
            {blogConfig.title && <meta name="twitter:title" content={blogConfig.title} />}
            {blogConfig.subTitle && (
              <meta name="twitter:description" content={blogConfig.subTitle} />
            )}            
          </Helmet>
          }
          <div className="top-line"></div>
          <section className="hero-intro is-primary hero">
            <div className="hero-body">
              <div className="container container-thin">
                <div className="hero-content">
                  <h3 className="blog-title">
                    {blogConfig.title}
                  </h3>
                  <div className="blog-subtitle">
                    <p>
                      {blogConfig.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> 
          <div className="main-inner">
            <div className="container container-thin">
            <h4 className="main-title" style={{display: 'none'}}>All Posts</h4> 
              <br /> 
              <div className="main-container">
                <div className="content">
                  <div>
                    <BlogRoll customFilter={filter ? filter : null}/>
                  </div>
                </div>
                <aside className="sidebar">
                  <ul className="widgets">
                    { blogConfig.categories && blogConfig.categories.length > 0 &&
                      <li className="widget item-no-bullet">
                        <div className="widget-head">
                          <h4 className="widget-title">Categories</h4>
                        </div> 
                        <div className="widget-body">
                          <ul className="widget-list">
                            {blogConfig.categories.map(category => <li><LinkComponent href={`/category/${kebabCase(category.text)}/`}>{category.text}</LinkComponent></li>)}
                          </ul>
                        </div>
                      </li> 
                    }
                    { blogConfig.connect && blogConfig.connect.length > 0 &&         
                      <li className="widget item-no-bullet">
                        <div className="widget-head">
                          <h4 className="widget-title">Connect</h4>
                        </div> 
                        <div className="widget-body">
                          <ul className="widget-list">
                            {blogConfig.connect.map(link => <li><LinkComponent href={link.link}>{link.text}</LinkComponent></li>)}
                          </ul>
                        </div>
                      </li>
                    }
                  </ul>
                </aside>
              </div>
            </div>          
          </div>
        </main>        
      </Layout>
    )
  }
}
