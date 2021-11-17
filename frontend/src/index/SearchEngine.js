import React from "react";
import {
    useHistory, Link
} from "react-router-dom";
import _ from "lodash"


function SearchEngine(props) {
    const { sPosts, searchHandler, sPostsUpd} = props;
    const history = useHistory();

    return (
        <div className="postcontent">
            <p onClick={()=>{history.goBack();searchHandler("");sPostsUpd([]);}} className="closebtn">x</p>
                    {sPosts.map((value, index)=>{
                    const date = new Date(value.date);
                    const toShow = date.toLocaleString('en-GB',{
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    });
                    return (   
                        <div key={value._id} className="searchpd postdescription">
                            <Link to={`/${date.getFullYear()}/${date.getMonth()+1}/${date.toLocaleString('en-GB',{day: '2-digit'})}/${_.kebabCase(value.title)}`}>
                            <h2>{value.title}</h2>
                            </Link>
                            <h5>{toShow}</h5>
                            <Link to={`/${date.getFullYear()}/${date.getMonth()+1}/${date.toLocaleString('en-GB',{day: '2-digit'})}/${_.kebabCase(value.title)}`}>
                            <h5 className="tbtm">{value.description}</h5>
                            </Link>
                            <h5>Author: {value.author}</h5>
                        </div>
                    )})}
        </div>
    )
}

export default SearchEngine;