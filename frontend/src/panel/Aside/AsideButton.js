import React from "react";
import Indicator from "./Indicator";

function AsideButton(props) {
    return (
        <button className="btnnew">{props.name}
            {props.indicator?<Indicator />:""}
        </button>
    )
}

export default AsideButton;