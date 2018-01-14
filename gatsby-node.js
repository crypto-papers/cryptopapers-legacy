/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
 const { createPage } = boundActionCreators;

 return new Promise((resolve, reject) => {
   const blogPostTemplate = path.resolve(`src/templates/post.js`);
   // Query for markdown nodes to use in creating pages.
   resolve(
     graphql(
       `
         {
           allMarkdownRemark(limit: 1000) {
             edges {
               node {
                 frontmatter {
                   path
                 }
               }
             }
           }
         }
       `
     ).then(result => {
       if (result.errors) {
         reject(result.errors);
       }

       // Create pages for each markdown file.
       result.data.allMarkdownRemark.edges.forEach(({ node }) => {
         const path = node.frontmatter.path;
         createPage({
           path,
           component: blogPostTemplate,
           context: {
             path,
           },
         });
       });
     })
   );
 });
};
