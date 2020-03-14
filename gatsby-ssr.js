import React from 'react'

export const onRenderBody = (
  { setPostBodyComponents },
  { async = true, clientId }
) => {
  setPostBodyComponents([
    <script
      key="gatsby-plugin-smallchat"
      src={`https://embed.small.chat/${clientId}.js`}
      async={async}
    />
  ])
}
