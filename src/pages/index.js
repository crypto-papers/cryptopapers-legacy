import React from 'react'
import Link from 'gatsby-link'

import download_cloud from '../assets/download_cloud.svg'

const IndexPage = ({data}) => (
  <div>
    <p>CryptoPapers is a simple archive of papers related to cryptocurrency. This site does not provide investment advice nor does a paper's inclusion in the archive imply an endorsement of it's contents.</p>
    <div className='paper_grid'>
      <h3 className='grid_header'>Latest Additions:</h3>
      <div className='grid_wrapper'>
        {data.allMarkdownRemark.edges.map(post => (
          <div className='grid_item' id={post.node.frontmatter.path} key={post.node.id}>
            <img className='grid_thumbnail' src={'/assets/cover/' + post.node.frontmatter.cover} /><br />
            <div className='meta_container'>
              <div className='grid_link_container' >
                <Link className='grid_link' to={post.node.frontmatter.path}>
                  <p className='grid_link_text'>{post.node.frontmatter.title}</p>
                </Link>
              </div>
              <div className='date_and_download_container'>
                <p className='publication_date' >Published: {post.node.frontmatter.date_published}</p>
                <Link className='grid_download' to={'/pdf/' + post.node.frontmatter.pdf}>
                  <img className='download_icon' src={download_cloud} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 20
      sort: { fields: [ frontmatter___date_added ], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            cover
            pdf
            date_published
            date_added
          }
        }
      }
    }
  }
`

export default IndexPage
