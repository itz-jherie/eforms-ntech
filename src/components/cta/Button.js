import React from 'react'
import "./button.css"

const STYLES = ["btn--success", "btn--outline"];

const SIZES = ["btn--large", "btn--medium", "btn--mobile"]

const COLOR = ["green", "transparent"];

const Button = ({
  content,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];
  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{content}</button>
  )
}

export default Button