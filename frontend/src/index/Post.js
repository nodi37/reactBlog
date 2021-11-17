import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

function Post(props) {

    const date = new Date(props.date);
    const toShow = date.toLocaleString('en-GB',{
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        });

    return (
        <div className="post"><img src={props.image} alt=""/>
                <div className="postdescription">
                    <h5>{toShow}</h5>
                    <Link to={`/${date.getFullYear()}/${date.getMonth()+1}/${date.toLocaleString('en-GB',{day: '2-digit'})}/${_.kebabCase(props.title)}`}>
                    <h2>{props.title}</h2>
                    </Link>
                    <Link to={`/${date.getFullYear()}/${date.getMonth()+1}/${date.toLocaleString('en-GB',{day: '2-digit'})}/${_.kebabCase(props.title)}`}>
                    <h5 className="tbtm">{props.description}</h5>
                    </Link>
                    <h5>Author: {props.author}</h5>
                </div>
        </div>
    )
    
}

export default Post;