import React from "react";

function LoadMore(props) {
    return (
        <div onClick={props.handler} className="loadmore"><p>{props.loadable?"Load more results":"Nothing more to load"}</p></div>
    )
}

export default LoadMore;