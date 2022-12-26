import React from 'react'
import "../styles/button.css"

const Button = ({value,handler}) => {
  return (
    <div className={value=== "Clr" ||value === "=" ? `${"calc-buttons"} ${"big-buttons"}` : `${"calc-buttons"}`} onClick={()=>handler(value)}>
        {value}
    </div>
  )
}

export default Button