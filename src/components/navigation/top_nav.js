import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
  <div className='site_navigation'>
    <div className='top_nav_container nav_grid_wrapper'>
      <div className='top_nav_item'>
        <Link to="/currencies/">Currencies</Link>
      </div>
      <div className='top_nav_item'>
        <Link to="/research/">Research</Link>
      </div>
      <div className='top_nav_item'>
        <Link to="/docs/">Documentation</Link>
      </div>
      <div className='top_nav_item'>
        <Link to="/contribute/">Contribute</Link>
      </div>
    </div>
  </div>
)

export default Navigation
