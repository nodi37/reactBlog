import React from "react";
import { useHistory } from "react-router-dom";

function Logout(){
    const history = useHistory();
    function handler(){
        history.push('/');
        const expires = new Date();
        document.cookie = `Token=null; Expires=${expires}; path=/;`;
    }

    return (<button onClick={handler} className="logout">Logout</button>)
}

export default Logout;