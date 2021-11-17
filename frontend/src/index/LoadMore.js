import React from "react";

function LoadMore(props) {
    return (
        <div className="loadwrapper">
            <div onClick={props.handler} className="load">{props.loadable?"Load more...":"No more posts."}</div>
        </div>
    )
}

export default LoadMore;