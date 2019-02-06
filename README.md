# gatsby-plugin-portal

React Portal is a nice feature in React 16+. Using portals requires that you add a div component to the main html file. This plugin adds the div component you need if you plan to use portals.

## Install
---
```javascript
npm install --save gatsby-plugin-portal
```

or 

```javascript
yarn add gatsby-plugin-portal
```

## How to use
---
```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'some key',
        id: 'whatever id value you want to use',
        text: 'text to appear in the div component',
      },
    },
  ],
}
```

