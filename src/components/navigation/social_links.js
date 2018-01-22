import React from 'react'

import twitter from '../../assets/twitter.svg'
import github from '../../assets/github.svg'
import mail from '../../assets/mail.svg'
import brave from '../../assets/brave_icon.png'

const SocialLinks = () => (
  <div className='contact_icons'>
    <a className='twitter_link' href='https://twitter.com/crypto_papers' target='_blank'>
      <img className='twitter_icon' src={twitter} />
    </a>
    <a className='github_link' href='https://github.com/mrewers/Cryptopapers' target='_blank'>
      <img className='github_icon' src={github} />
    </a>
    <a className='mail_link' href='mailto:cryptopapers@protonmail.com'>
      <img className='mail_icon' src={mail} />
    </a><br /><br />
    <a className='brave_link' href='https://brave.com/' target='_blank'>
      <p className='brave_text'>Supported by:</p> <img className='brave_icon' src={brave}/>
    </a>
  </div>
)

export default SocialLinks
