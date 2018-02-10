import React from 'react'
import Link from 'gatsby-link'

import download_cloud from '../assets/download_cloud.svg'

const CurrencyPage = ({data}) => (
  <div>
    <p>CryptoPapers is a simple online archive that lists papers related to cryptocurrency. The archive includes cryptocurrency whitepapers, research papers, and technical documentation and is intended for educational purposes. This site does not provide investment advice nor does a paper's inclusion in the archive imply an endorsement of it's contents.</p>
    <div className='paper_grid'>
      <h3 className='grid_header'>Crytpocurrency Whitepapers:</h3>
      <div className='grid_wrapper'>
        {data.allMarkdownRemark.edges.map(post => (
          <div className='grid_item' id={post.node.frontmatter.path} key={post.node.id}>
            <h4 className='currency_header'>{post.node.frontmatter.ticker}</h4>
            <div className='grid_thumbnail'>
              <Link className='thumbnail_link' to={'/' + post.node.frontmatter.path}>
                <img className='grid_thumbnail_image' src={'/assets/covers/' + post.node.frontmatter.cover} /><br />
              </Link>
            </div>
            <div className='meta_container'>
              <div className='grid_link_container' >
                <Link className='grid_link' to={'/' + post.node.frontmatter.path}>
                  <p className='grid_link_text'>{post.node.frontmatter.title}</p>
                </Link>
              </div>
              <div className='date_and_download_container'>
                <p className='publication_date' >Published: {post.node.frontmatter.date_published}</p>
                <Link className='grid_download' to={'/assets/pdf/' + post.node.frontmatter.pdf}>
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
  query CoinQuery {
    allMarkdownRemark(
      filter: { frontmatter: { is_currency: { eq: true } } }
      sort: { fields: [ frontmatter___currency ], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            cover
            pdf
            category
            is_currency
            currency
            ticker
            date_published
            date_added
            source
          }
        }
      }
    }
  }
`

export default CurrencyPage
