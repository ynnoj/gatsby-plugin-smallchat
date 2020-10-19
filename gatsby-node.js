exports.onPreBootstrap = ({ reporter }, pluginOptions) => {
  if (!pluginOptions || !pluginOptions.clientId)
    return reporter.panic(
      'gatsby-plugin-smallchat: You must provide your Smallchat client ID'
    )
}
