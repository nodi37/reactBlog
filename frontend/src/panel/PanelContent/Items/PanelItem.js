import React from "react";
import Title from "./PanelItem/Title";
import CmntContent from "./PanelItem/CmntContent";
import BtnPanel from "./PanelItem/BtnPanel";
import InfoBar from "./PanelItem/InfoBar";
//import ShowCmntsBtn from "./PanelItem/ShowCmntsBtn";
import DateCt from "./PanelItem/DateCt";


function PanelItem(props) {
    const [msg, updateMsg] = React.useState("");
    const [published, uPubStatus] = React.useState(props.published)
    return (
        <div className="item">
            <Title title={props.title}/>
            {props.type==="comment"?<CmntContent />:""}
            {props.type==="comment"?<DateCt />:""}
            <InfoBar msg={msg} />
            <BtnPanel type={props.type} published={published} uPubStatus={uPubStatus} getPosts={props.getPosts} postId={props.postId} updateMsg={updateMsg}/>
        </div>
    )
}
//<ShowCmntsBtn />

export default PanelItem;