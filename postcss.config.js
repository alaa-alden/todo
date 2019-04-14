module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-global-import': {},
    'postcss-discard-comments': {},
    'postcss-inline-svg': {},
    'postcss-modules-values': {},
    'postcss-grid-kiss': {},
    'postcss-preset-env': {
      browsers: ['last 2 versions', '> 5%'],
    },
    precss: {},
    'postcss-sass-color-functions': {},
  }
}
