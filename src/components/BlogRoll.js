import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'

import LinkComponent from './LinkComponent'

class BlogRoll extends React.Component {
  render() {
    const { data, customFilter } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (        
        posts && posts.length === 0 ? 
          <div>No blog entries published yet.</div>
        :
          posts.map(({ node: post }) => {            
            if(customFilter) {
              if(post.frontmatter.author === customFilter || post.frontmatter.category[0].label === customFilter) {
                return (            
                  <div className="article-excerpt" metalink="https://www.google.com/" key={post.id}>
                    <h3 className="article-excerpt-title">
                      <LinkComponent href={post.fields.slug} className="">{post.frontmatter.title}</LinkComponent>
                    </h3> 
                    <div className="article-excerpt-entry">
                      <div>
                        <p>{post.excerpt}</p>
                      </div>
                    </div> 
                    <div className="article-excerpt-meta">
                      <p>By <LinkComponent href={`/author/${kebabCase(post.frontmatter.author)}/`}>{post.frontmatter.author}</LinkComponent> on {post.frontmatter.date}</p>                
                    </div>
                  </div>
                )
              } else {
                return null
              }
            } else {
              return (            
                <div className="article-excerpt" metalink="https://www.google.com/" key={post.id}>
                  <h3 className="article-excerpt-title">
                    <LinkComponent href={post.fields.slug} className="">{post.frontmatter.title}</LinkComponent>
                  </h3> 
                  <div className="article-excerpt-entry">
                    <div>
                      <p>{post.excerpt}</p>
                    </div>
                  </div> 
                  <div className="article-excerpt-meta">
                    <p>By <LinkComponent href={`/author/${kebabCase(post.frontmatter.author)}/`}>{post.frontmatter.author}</LinkComponent> on {post.frontmatter.date}</p>                
                  </div>
                </div>                
              )
            }              
          }
      )
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  customFilter: PropTypes.string,
}

export default ({customFilter}) => (  
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date (formatString: "DD/MM/YYYY", locale: "en_us")
                author
                category {
                  label
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} customFilter={customFilter}/>}
  />
)
