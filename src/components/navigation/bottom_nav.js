import React from 'react'
import Link from 'gatsby-link'

const BottomNavigation = () => (
  <div className='bottom_site_navigation'>
    <div className='bottom_nav_container'>
      <ul className="bottom_nav_list">
        <li className='bottom_nav_item'>
          <Link to="/currencies/">Currencies</Link>
        </li>
        <li className='bottom_nav_item'>
          <Link to="/research/">Research</Link>
        </li>
        <li className='bottom_nav_item'>
          <Link to="/docs/">Documentation</Link>
        </li>
        <li className='bottom_nav_item'>
          <Link to="/contribute/">Contribute</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default BottomNavigation
