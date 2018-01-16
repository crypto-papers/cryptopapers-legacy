import React from 'react'

import help from '../assets/help_me.gif'

const ContibutePage = () => (
  <div>
    <h3>We Need Your Help</h3>
      <h4>Add a Paper</h4>
        <p>The CryptoPapers team is currently one person working in their free time, so the site is undoubtedly missing many great papers. If you would like to add a paper to the collection head over to our <a href='https://github.com/mrewers/Cryptopapers' target='_blank'>GitHub page</a> and follow the instructions for submitting a pull request.</p>
        <p>If you do not want to submit a pull request, but would still like to suggest a paper for inclusion, please tweet <a href='https://twitter.com/crypto_papers' target='_blank'>@crypto_papers</a> with your recommendation and a link to the paper.</p>

      <h4>Site Enhancements</h4>
        <p>We would also like to hear from you if you spot any bugs, errors, or areas for improvement. Again, please submit a detailed issue report at our <a href='https://github.com/mrewers/Cryptopapers' target='_blank'>GitHub page</a> or shoot a tweet over to <a href='' target='_blank'>@crypto_papers</a>.</p>

      <h4>Donations</h4>
        <p>The CryptoPapers project fulfils a personal interest and serves as a learning opportunity. I never intended, nor do I expect, to make money off of the venture. That said, webhosting ain't free and I've invested a fair bit of time in tracking down and including the papers in the library. If you enjoy the site and are feeling super generous, please consider contributing a little bit to one of the following addresses:</p>
        <ul>
          <li><strong>ETH:</strong> 0xA4E0C85376Ee823BD8A34408730203C4387D18dC</li>
          <li><strong>BTC:</strong> 1PXaiBU21ecqrmvf2mjLZc4qaTtu1abcGJ</li>
          <li><strong>BCH:</strong> 1JTEmw49AGT94DNgqjZMfRRmHmz2jo9n6Z</li>
          <li><strong>LTC:</strong> LS7rPDpBjwG4Z2MxmDEFac8JsXoehEiaHW</li>
          <li><strong>DASH:</strong> XqFosEhsE4dWSouZaQFAHwBqez116qej9s</li>
        </ul>
        <div className='gif_container'>
          <img className='help_gif' src={help} alt='Help Me Im Poor' />
        </div>
  </div>
)

export default ContibutePage
