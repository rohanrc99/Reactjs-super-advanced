import React from 'react'
import './styling.css'

function Stylesheettwo(props) {

    let className = props.primary && props.primary==="primary"? "primary" : 'no-class'  

    return (
        <div>
            <h1 className={className}>Using Stylesheet</h1>
        </div>
    )
}

export default Stylesheettwo
