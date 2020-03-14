# gatsby-plugin-smallchat

💬 Plugin to add [Smallchat](https://small.chat) to your Gatsby site

## Install

```sh
yarn add gatsby-plugin-smallchat
```

## How to use

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-smallchat`,
    options: {
      async: false, // Defaults to `true`
      clientId: '...'
    },
  },
],
```
