# CryptoPapers

[CryptoPapers.info](https://cryptopapers.info/) is a simple online archive that lists papers related to cryptocurrency. The archive includes cryptocurrency whitepapers, research papers, and technical documentation and is intended for educational purposes. This site does not provide investment advice nor does a paper's inclusion in the archive imply an endorsement of it's contents.

The site's codebase, as well as the project itself are open-sourced and contributions are encouraged (see below).

## Built with Gatsby
Gatsby is a static site generator that uses the [React](https://reactjs.org/) JavaScript framework and the [GraphQL](http://graphql.org/) API query language to build a website. This website is then converted into static files that can be readily and cheaply hosted anywhere that provides online storage (such on a GitHub page or in an AWS S3 bucket). Those interested in building a static site, learning about Gatsby, or looking to replicate the functionality of this site are welcome to fork the repo and modify the code as they wish.

Before you begin working on the project you must have NodeJS (v4 or higher), NPM (v3 or higher), and Gatsby installed on your computer. In your command line interface (CLI) run the commands `node --version` and `npm --version` to ensure you have the correct versions. If you do not have Node, or need to update it, you can do so at [nodejs.org](https://nodejs.org/) (NPM comes installed with NodeJS). Now that you have NodeJS and NPM, install Gatsby with the command: `npm install --global gatsby-cli`.

If you're starting a new project run `gatsby new your-site-name` (replacing your-new-site with whatever you want to call your site) to create a new site and `cd` into the newly created directory `your-new-site`. If you are modifying this project simply `cd` into the root directory `Cryptopapers`. In your CLI enter the command: `gatsby deploy`.

This will run a deployment build and open a test server where you can view your site. In your browser navigate to `localhost:8000` and you will see your site, which will live update any time you make a change. Note that the pages based off of markdown files (saved in src/pages/papers) will not live update and you will need to restart your development survey to see the changes. Also keep in mind that given the way this project is set up (i.e. with static files served from site root), PDF files and most images will not load on the development site. If this is a deal breaker, there are other options (such as the [gatsby-remark-images plugin](https://www.gatsbyjs.org/packages/gatsby-remark-images/)) that may better serve your needs.

When you have finished your work are and are content with the site, make a production build by running `gatsby build`. This will generate the requisite static files in a directory called 'public' at the project root. Once you upload these files to your chosen hosting solution your site will be live and online.

For full Gatsby documentation and tutorials, please visit [Gatsby docs site](https://www.gatsbyjs.org/docs/). I also found this [YouTube video playlist](https://goo.gl/SUHdwC) from Level Up Tutorials extremely helpful when getting started using Gatsby.

## Contribute

### Add a Paper
The CryptoPapers team is currently one person working in their free time, so the site is undoubtedly missing a vast number of relevant papers. If you would like to add a paper to the collection submit a pull request titled `New Paper - Paper Title` with the required components of a paper listing (i.e. a description markdown file, the paper as a PDF, and a copy of the cover image).

New paper pull requests will only be considered for inclusion if they:
  1. Are properly titled using the convention `New Paper - Paper Title`.
  1. Have a properly formatted markdown file describing the paper and providing all of the required metadata. (Please duplicate the [`/src/templates/template.md`](src/templates/template.md) file in the directory [`/src/templates/`](src/templates), replace the dummy text therein with information on the paper, and move the new file into the directory [`/src/pages/papers`](src/pages/papers))
  1. Include a PDF copy of the paper in the directory [`/pdf`](/pdf).
  1. Include an image of the cover or first page of the paper in the directory [`/covers`](/covers). (Hint: Firefox makes it extremely easy to screenshot the whole first page of an online PDF using the built-in screenshot tool)

If you would like to submit a paper for inclusion but are unable to complete a pull request, please tweet \@crypto_papers with your recommendation and a link to the paper.

### Site Enhancements
We would also like to hear from you if you see any bugs, errors, or areas for improvement. Please submit a detailed issue report or a well documented pull request explaining the problem and how to address it.

### :moneybag: Donations :moneybag:
The CryptoPapers project fulfils a personal interest and serves as a learning opportunity. I never intended, nor do I expect, to make money off of the venture. That said, webhosting ain't free and I've invested a fair bit of time in tracking down and including the papers in the library. If you enjoy the site and are feeling super generous, please consider contributing a little bit to one of the following addresses:

**ETH:** 0xA4E0C85376Ee823BD8A34408730203C4387D18dC

**BTC:** 1PXaiBU21ecqrmvf2mjLZc4qaTtu1abcGJ

**BCH:** 1JTEmw49AGT94DNgqjZMfRRmHmz2jo9n6Z

**LTC:** LS7rPDpBjwG4Z2MxmDEFac8JsXoehEiaHW

**DASH:** XqFosEhsE4dWSouZaQFAHwBqez116qej9s
