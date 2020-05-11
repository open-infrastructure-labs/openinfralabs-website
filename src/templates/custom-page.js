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


export const CustomPageTemplate = ({
  seo,
  title,  
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="theme-container no-navbar no-sidebar">
      {seo && 
      <Helmet title={seo.title ? seo.title : title} titleTemplate={metadata.siteMetadata.titleTemplate}>        
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
          <h1 id="main-title">OPENINFRA LABS</h1> 
          <p className="description" dangerouslySetInnerHTML={{__html: title}}></p>
        </header>                 
        
        <PageContent className="theme-default-content custom content__default" content={content} />

      </main>    
    </div>
  )
}

CustomPageTemplate.propTypes = {  
  seo: PropTypes.object,
  title: PropTypes.object,  
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CustomPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <CustomPageTemplate
        seo={frontmatter.seo}
        contentComponent={HTMLContent}
        title={frontmatter.title}        
        content={html}
      />
    </Layout>
  )
}

CustomPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CustomPage

export const customPageQuery = graphql`
  query CustomPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "custom-page" } }) {
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
        title
      }
    }
  }
`
