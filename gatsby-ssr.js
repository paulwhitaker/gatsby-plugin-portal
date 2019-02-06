import React from 'react'

/**
 * @param { key, id, text } pluginOptions 
 */

export const onRenderBody = ({setPostBodyComponents}, pluginOptions) => {
  setPostBodyComponents([
  <div key={pluginOptions.key} id={pluginOptions.id}>{pluginOptions.text}</div>])
}