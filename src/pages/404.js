import React from 'react'

import hodl from '../assets/hodl.gif'

const NotFoundPage = () => (
  <div>
    <h3>OOPS...PAGE NOT FOUND</h3>
    <p>It seems that the page you're looking for does not exist. Please hodl on while we resolve the problem.</p>
    <div className='gif_container'>
      <img className='hodl_gif' src={hodl} alt='404 Error' />
    </div>
  </div>
)

export default NotFoundPage
