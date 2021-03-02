/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;
  const exclude = ['utils', 'components'];
  const isntPage = exclude.findIndex(str => page.path.includes(str)) !== -1;

  if (isntPage) {
    deletePage(page);
  }
}
