const cssVars = require('./src/config/css-variables')

const gridBreakpoints = {
  xs: '480px',
  sm: '768px',
  md: '1024px',
  xl: '1200px',
  xxl: '1440px'
}

module.exports = {
  plugins: [
    require('postcss-color-function'),
    require('postcss-nested'),
    require('autoprefixer')(),
    require('postcss-custom-media')({
      importFrom: {
        customMedia: {
          '--xs-viewport': `(max-width: ${gridBreakpoints.xs})`,
          '--sm-viewport': `(max-width: ${gridBreakpoints.sm})`,
          '--md-viewport': `(max-width: ${gridBreakpoints.md})`,
          '--xl-viewport': `(max-width: ${gridBreakpoints.xl})`,
          '--xxl-viewport': `(max-width: ${gridBreakpoints.xxl})`
        }
      }
    }),
    require('postcss-import')({
      plugins: [
        require('stylelint')({
        })
      ]
    }),
    require('postcss-css-variables')({
      variables: cssVars,
      preserve: ({ prop, value }) => {
        if (!prop) return false
        return value.indexOf('--root-') >= 0
      }
    })
  ]
}
