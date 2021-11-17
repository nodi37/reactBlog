import React from "react";
import AsideButton from "./AsideButton";
import { useRouteMatch, Link } from "react-router-dom";
import Logout from "./Logout";

function Aside() {
    const match = useRouteMatch();
    return (
        <aside>
        <h1>Admin Tools</h1>

        <Link to={`${match.url}/posts`}>
            <AsideButton name="Posts" indicator={false}/>
        </Link>
        <Logout />
        </aside>
    )
//         <Link to={`${match.url}/settings`}>
//              <AsideButton name="Settings" indicator={false}/>
//         </Link>
//         <Link to={`${match.url}/new`}>
//             <AsideButton name="New" indicator={true}/>
//         </Link> 
}

export default Aside;