import React from 'react'

import twitter from '../../assets/twitter.svg'
import github from '../../assets/github.svg'

const SocialLinks = () => (
  <div className='contact_icons'>
    <a className='twitter_link' href='https://twitter.com/crypto_papers' target='_blank'>
      <img className='twitter_icon' src={twitter} />
    </a>
    <a className='github_link' href='https://github.com/mrewers/Cryptopapers' target='_blank'>
      <img className='github_icon' src={github} />
    </a>
  </div>
)

export default SocialLinks
