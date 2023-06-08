import './custom_button.css'
import React from 'react'

function CustomButton(props) {
    const onPressed = (Event) => {
        console.log('button clicked on pressed:', Event)
    }

    return (

        <button id={props.id} onClick={props.onClick}
            className={`btn ${props.colorClass}`}>{props.title}
            {props.showIcon ?
                <span style={{ marginLeft: "20px" }}></span> :
                <span></span>
            }{props.showIcon && <span class="material-symbols-outlined">
                download
            </span>}
        </button>
    )
}

export default CustomButton