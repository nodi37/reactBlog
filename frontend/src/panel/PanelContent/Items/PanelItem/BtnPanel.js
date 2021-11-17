import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import AcceptBtn from "./BtnPanel/AcceptBtn";
import DeleteBtn from "./BtnPanel/DeleteBtn";
import EditBtn from "./BtnPanel/EditBtn";
import PublishBtn from "./BtnPanel/PublishBtn";
import UnpublishBtn from "./BtnPanel/UnpublishBtn";

//PUBLISHED = TRUE THEN  
function BtnPanel(props) {
    const match = useRouteMatch();

    if(props.type==="post"){
        return (
            <div className="buttons">
                {props.published?<UnpublishBtn uPubStatus={props.uPubStatus} postId={props.postId} updateMsg={props.updateMsg}/>:<PublishBtn uPubStatus={props.uPubStatus} postId={props.postId} updateMsg={props.updateMsg}/>}
                <Link to={`${match.url}/edit/${props.postId}`}>
                <EditBtn />
                </Link>
                <DeleteBtn getPosts={props.getPosts} postId={props.postId}/>
            </div>
        )
    } else {
    return (
        <div className="buttons">
            <AcceptBtn />
            <EditBtn />
            <DeleteBtn />
        </div>
    )}
}

//<PublishBtn />
//<UnpublishBtn />

export default BtnPanel;