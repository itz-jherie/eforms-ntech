import React from 'react'


const ButtonIcon = ({icon, content, className}) => {
  return (
    <button className={className}>{icon} {content}</button>
  )
}

export default ButtonIcon