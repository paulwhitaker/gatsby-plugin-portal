# gatsby-plugin-portal

### If you want to use React Portals in your gatsby site, this is a simple way to add the required div element to your index.html.
---

## What are Portals
Introduced in React 16, portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. [Here's the React documentation on portals](https://reactjs.org/docs/portals.html)


## Why is this necessary?

Adding a portal requires that you insert a div with an id to the ./public/index.html file.
```html
<!-- ./Public/index.html -->
<div id="portal"></div>
```
Gatsby builds this file when the site is generated so there is no /public/index.html file to edit. Instead, you need to add this component using the setPostBodyComponents method of the onRenderBody API in your gatsby-ssr.js file.

There are 3 ways you can do this.

- [Install the gatsby-plugin-portal](https://www.npmjs.com/package/gatsby-plugin-portal)
- [Make your own local plugin](https://www.gatsbyjs.org/docs/plugin-authoring/#local-plugins)
- [Add the onRenderBody API code to the gatsby-ssr.js file in your project root](https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody)


---
## Install

```javascript
npm install --save gatsby-plugin-portal
```

or 

```javascript
yarn add gatsby-plugin-portal
```

## How to use

Add the plugin to your gatsby-config.js file.

String, this will default to 'portal' if you leave it out.

```javascript
/**
In your gatsby-config.js

Available Options
key: ""
A key is needed so that react doesn't complain about arrays needing a unique key. This is a string value and will default to 'portal' if you leave it out.

id:"string"
Sets the id of the div element. It will default to 'portal' if you leave it out.   
*/

// You can resolve it with options like this.
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',        
      },
    },
  ],
}

// Or add is without options like this.
module.exports = {
  plugins: [`gatsby-plugin-portal`]
}
```

