import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="sidebar-mask"></div> 
    <aside className="sidebar"></aside> 
    <main className="home-blog">
      <div className="top-line"></div>
      <section className="hero-intro is-primary hero">
        <div className="hero-body">
          <div className="container container-thin">
            <div className="hero-content">
              <h3 className="blog-title">
                NOT FOUND
              </h3>
              <div className="blog-subtitle">
                <p>
                You just hit a route that doesn&#39;t exist... the sadness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default NotFoundPage
