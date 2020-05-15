import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import 'react-medium-image-zoom/dist/styles.css'

import leftArrow from '../img/svg/arrow-left.svg'
import metadata from '../content/site-metadata.json'
import LinkComponent from '../components/LinkComponent'


export const IndexPageTemplate = ({
  seo,
  header,
  intro,
  features,
  sponsors,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="theme-container no-navbar no-sidebar">
      {seo && 
      <Helmet title={seo.title ? seo.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>        
        {seo.description && <meta name="description" content={seo.description} />}
        {seo.image && <meta name="image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}        
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}          
      </Helmet>
      }      
      <div className="sidebar-mask"></div> 
      <aside className="sidebar"></aside> 
      <main aria-labelledby="main-title" className="home">
        <header className="hero">
          <h1 id="main-title">{header.title}</h1> 
          <p className="description" dangerouslySetInnerHTML={{__html: header.subTitle}}></p>
        </header> 
        <div className="content__intro">
          <h3 id="connecting-open-source-projects-to-production">
            <LinkComponent href="#connecting-open-source-projects-to-production" className="header-anchor">#</LinkComponent> {intro.title}
          </h3> 
          <p>
            {intro.text}
          </p>
        </div> 
        <h3>{features.title}</h3> 
        <div className="features">
          {features.featureList.map((feature, index) => {
            return (
            <div className="feature" key={index}>
              <div className="feature-header">
                {feature.image.extension === 'svg' && !feature.image.childImageSharp ?
                  <img src={!!feature.image.publicURL ? feature.image.publicURL : feature.image} alt={feature.title} />
                  :
                  <img src={!!feature.image.childImageSharp ? feature.image.childImageSharp.fluid.src : feature.image } alt={feature.title} />
                }
              </div> 
              <p>{feature.details}</p>
            </div>
            )
          })}        
        </div> 
        
        <PageContent className="theme-default-content custom content__default" content={content} />

        <h3>{sponsors.title}</h3> 
          <ul className="sponsors">
            {sponsors.sponsorList.map(sponsor => {
              return (
                <li className="sponsor">
                  {sponsor.logo.extension === 'svg' && !sponsor.logo.childImageSharp ?
                    <img src={!!sponsor.logo.publicURL ? sponsor.logo.publicURL : sponsor.logo} alt={sponsor.logo.publicURL} />
                    :
                    <img src={!!sponsor.logo.childImageSharp ? sponsor.logo.childImageSharp.fluid.src : sponsor.logo } alt={sponsor.logo.publicURL} />
                  }
                </li>
              )
            })}          
          </ul> 
      </main>    
    </div>
  )
}

IndexPageTemplate.propTypes = {  
  seo: PropTypes.object,
  header: PropTypes.object,
  intro: PropTypes.object,
  features: PropTypes.object,  
  sponsors: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        seo={frontmatter.seo}
        contentComponent={HTMLContent}
        header={frontmatter.header}        
        intro={frontmatter.intro}
        features={frontmatter.features}
        sponsors={frontmatter.sponsors}
        content={html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            extension
            publicURL            
          }
        }
        header {
          title
          subTitle          
        }                
        intro {
          title          
          text          
        }
        features {
          title
          featureList {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL            
            }
            details
          }          
        }
        sponsors {
          title
          sponsorList {
            logo {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL            
            }
          }
        }        
      }
    }
  }
`
