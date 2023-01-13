import React from 'react'
import "./button.css"

const Button = ({className, content}) => {
  return (
    <button className={className}>{content}</button>
  )
}

export default Button