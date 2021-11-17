import React from "react";
import AddButton from "./Items/AddButton";
import PanelItem from "./Items/PanelItem";
import LoadMore from "./Items/LoadMore";
import { Link, useRouteMatch } from "react-router-dom";
 
function PanelContent() {
    const match = useRouteMatch();
    return (
        <main className="panelmain">
            <Link to={`${match.url}/add`}>
                <AddButton />
            </Link>
            <PanelItem />
            <LoadMore />
        </main>
    )
}

export default PanelContent;