import React from "react"

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div
      key={pluginOptions.key ? pluginOptions.key: 'default'}
      id={pluginOptions.id ? pluginOptions.id : null}>
      {pluginOptions.text}
    </div>
  ])
}
