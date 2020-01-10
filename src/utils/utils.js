import React from 'react'

export function childsProps(props) {
  return React.Children.map (props.children, child => {
    return React.cloneElement(child, { ...props })
  })
}