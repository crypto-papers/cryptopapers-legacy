import React from 'react'
import Link from 'gatsby-link'

const BottomNavigation = () => (
  <div className='site_navigation'>
    <div className='nav_container grid_wrapper'>
      <div className='bottom_nav_item'>
        <Link to="/currencies/">Currencies</Link>
      </div>
      <div className='bottom_nav_item'>
        <Link to="/research/">Research</Link>
      </div>
      <div className='bottom_nav_item'>
        <Link to="/docs/">Documentation</Link>
      </div>
      <div className='bottom_nav_item'>
        <Link to="/contribute/">Contribute</Link>
      </div>
    </div>
  </div>
)

export default BottomNavigation
