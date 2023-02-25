const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack=require('webpack')
environment.pligins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $:'jquery/src/iquery',
    jQuery:'jquery/src/jquery',
    Popper:'popper.js'
  })
  )
