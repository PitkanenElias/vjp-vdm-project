import React from "react";
import "./slider.css"

export function Slider(props) {

    return(
        <div class="slidecontainer">
            <input type="range" 
            min="0" 
            max="100" 
            step="25"
            value={props.value} 
            className="slider"         
            onChange={(event) => props.onChange && props.onChange(parseInt(event.target.value))}
            onMouseUp={props.onAfterChange}
            onTouchEnd={props.onAfterChange}>
            </input>
        </div>
    );
};