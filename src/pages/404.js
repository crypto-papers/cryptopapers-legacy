import React from 'react'

import hodl from '../assets/hodl.gif'
const NotFoundPage = () => (
  <div>
    <h3>OOPS...PAGE NOT FOUND</h3>
    <p>You just hit a route that doesn&#39;t exist, please hodl with us.</p>
    <img className='hodl_gif' src={hodl} height='600px' />
  </div>
)

export default NotFoundPage
