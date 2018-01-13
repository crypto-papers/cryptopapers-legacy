import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <p>CryptoPapers is a simple archive of papers related to cryptocurrency. This site does not provide investment advice nor does a paper's inclusion in the archive imply an endorsement of it's contents.</p>
    <h3>Whitepapers</h3>
    {data.allMarkdownRemark.edges.map(post => (
      <div  key={post.node.id}>
        <img src={'/assets/images/' + post.node.frontmatter.cover} />
        <Link to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link>
      </div>
    ))}
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
