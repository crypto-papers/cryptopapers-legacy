import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div className='site_header'>
    <div className='site_title_container'>
      <h1>
        <Link className='site_title' to="/">
          CryptoPapers.info
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
