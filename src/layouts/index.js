import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import './style.scss'

const TemplateWrapper = ({ children, data }) => (
  <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: `${data.site.siteMetadata.description}` },
          { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
          { property: 'og:image', content: `${data.site.siteMetadata.og_image}` },
          { property: 'og:title', content: `${data.site.siteMetadata.og_title}` },
          { property: 'og:description', content: `${data.site.siteMetadata.og_description}` }
        ]}
        link={[
          { rel: 'shortcut icon', href: '/assets/favicon.ico', type: 'image/x-icon'}
        ]}
      >
        <html lang='en-US'/>
      </Helmet>
    <div className='page_wrap'>
      <Header />
      <Navigation />
      <div className='site_body'>
        {children()}
      </div>
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query SiteMetadataLookup {
    site {
      siteMetadata {
        title
        description
        keywords
        og_image
        og_title
        og_description
      }
    }
}
`
