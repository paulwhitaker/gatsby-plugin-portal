# gatsby-plugin-portal

### If you want to use React Portals in your gatsby site, this is a simple way to add the required div element to your /public/index.html file.

For convenience, I've explained a couple of gotchas that you will run into when implementing portals using Gatsby and how to fix them.

---

## What are Portals
Introduced in React 16, portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. [Here's the React documentation on portals](https://reactjs.org/docs/portals.html)

## Why use Portals
Portals are great for creating things like re-usable modals for alerts, login dialogs, etc.

## Portal Documentation and Tutorials
- [React Documentation](https://reactjs.org/docs/portals.html)
- [Creating A Re-useable Portal by Levelup Tutorials](https://www.youtube.com/watch?v=SVQ2l2w-zPM)

---

## Portal Gotchas in Gatsby
There are a two gotchas in Gatsby that you need to look out for.
- There is no index.html where you can simply add a div.  
That's why this plugin exists, so... problem solved. Follow the install and setup instructions below.  

- The document object is not defined during build.  
When you create a modal component the document object will not be available during build. I've posted some example code below showing you how to get around this.  

---

## Why is this plugin necessary?

Adding a portal requires that you insert a div with an id into ``` ./public/index.html```that can be used by ```document.getElementById```.  

```html
<!-- ./Public/index.html -->
<div id="portal"></div>
```
Gatsby builds the index.html file when the site is generated, so there is no ```/public/index.html``` file to edit. What you need to do is to add the div component using the ```setPostBodyComponents``` method of the ```onRenderBody``` API in your gatsby-ssr.js file.

There are 3 ways you can do this.

- [Install the gatsby-plugin-portal](https://www.npmjs.com/package/gatsby-plugin-portal)  
This is the easiest way to do it. It's a really simple plugin made mostly for convinience. You may have reasons to do this another way. If so, here are two additional options.
- [Make your own local plugin](https://www.gatsbyjs.org/docs/plugin-authoring/#local-plugins)
- [Add the onRenderBody API code to the gatsby-ssr.js file in your project root](https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody)

If you decide to use this plugin, follow the instructions below. Be sure

---
## Install

```javascript
npm install --save gatsby-plugin-portal
```

or 

```javascript
yarn add gatsby-plugin-portal
```
---
## How to use

Add the plugin to your gatsby-config.js file.

```javascript
/**
* In your gatsby-config.js
* 
* Available Options
* 
* key: "string"
* A key is needed so that react doesn't complain about arrays
* needing a unique key. This is a string value and will default
* to 'portal' if you leave it out.
* 
* id:"string"
* Sets the id of the div element. It will default to 'portal' if you leave it out.   
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
---
## Gatsby Gotcha - document is undefined

If you follow the [react documentation](https://reactjs.org/docs/portals.html) or one of the many useful tutorials on youtube [like this one from LevelUp Tutorials](https://www.youtube.com/watch?v=SVQ2l2w-zPM) you will create a re-usable portal component.

The portal will work in development mode. However, when you build the file, Gatsby will complain that the document object doesn't exist and refer you to the [documentation on this error here](https://www.gatsbyjs.org/docs/debugging-html-builds/).

Here's a code snippet explaining how to fix the problem.

```javascript
import { Component } from 'react'
import ReactDOM from 'react-dom'

// Use a ternary operator to make sure that the document object is defined
const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

export default class Portal extends Component {

  constructor() {
    super()
    // Use a ternary operator to make sure that the document object is defined
    this.el = typeof document !== `undefined` ? document.createElement('div') : null
  }

  componentDidMount = () => {    
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props

    // Check that this.el is not null before using ReactDOM.createPortal
    if (this.el) {
      return ReactDOM.createPortal(children, this.el)
    } else {
      return null
    }

  }
}

```