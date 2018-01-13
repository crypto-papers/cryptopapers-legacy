import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header className='masthead'>
    <div className='site_title_container'>
      <h1>
        <Link className='site_title' to="/">
          CryptoPapers.info
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
