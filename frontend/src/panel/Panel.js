import React from "react";
import Aside from './Aside/Aside';
//import PanelContent from "./PanelContent/PanelContent";
import Posts from "./PanelContent/Posts";
import Editor from "./PanelContent/Editor";
import {
    Switch,
    useRouteMatch,
    Route,
    useHistory
} from "react-router";


import './panel.css';
import NotFound from "../NotFound";

function Panel() {
    const history = useHistory();
    const match = useRouteMatch();

    React.useEffect(() => {
        const value = `; ${document.cookie}`;
        if (value.indexOf("Token") === -1) {
            history.push('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="mainwrapper">
            <Aside />
            <Switch>
                <Route exact path={match.url + "/posts/add"}>
                    <Editor />
                </Route>
                <Route path={match.url + "/posts/edit"}>
                    <Editor />
                </Route>
                <Route exact path={match.url + "/posts"}>
                    <Posts />
                </Route>
                <Route path={match.url + "/*"}>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}

export default Panel;