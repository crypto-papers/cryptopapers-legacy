import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <p>CryptoPapers is a simple archive of papers related to cryptocurrency. This site does not provide investment advice nor does a paper's inclusion in the archive imply an endorsement of it's contents.</p>
    <div className='paper_grid'>
      <h3 className='grid_header'>Latest Additions:</h3>
      <div className='grid_wrapper'>
        {data.allMarkdownRemark.edges.map(post => (
          <div className='grid_item' id={post.node.frontmatter.path} key={post.node.id}>
            <img className='grid_thumbnail' src={'/assets/images/' + post.node.frontmatter.cover} /><br />
            <Link className='grid_link' to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            cover
          }
        }
      }
    }
  }
`

export default IndexPage
