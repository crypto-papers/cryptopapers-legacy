import React from 'react'

import BottomNavigation from '../navigation/bottom_nav.js'
import SocialLinks from '../navigation/social_links.js'

const Footer = () => (
  <footer className='site_footer'>
    <div className='footer_nav_container'>
      <div className='footer_nav'>
        <SocialLinks />
        <BottomNavigation />
      </div>
    </div>
  </footer>
)

export default Footer
