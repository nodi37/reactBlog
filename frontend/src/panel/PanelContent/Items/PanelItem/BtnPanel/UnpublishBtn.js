import React from "react";
import { useHistory } from "react-router-dom"; 

function UnpublishBtn(props) {
    const history = useHistory();
    const token = getCookie('Token');
    
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        if (value.indexOf("Token")===-1){
            history.push('/login');
        } else {
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }
    }

    return (
        <button onClick={handler} className="upbtn">Unpub</button>
    )

    function handler(){
        fetch(process.env.REACT_APP_API+props.postId, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Token': token
            },
            body: JSON.stringify({
                publish: false
            })
        }).then((res) => {
            if (res.ok) {
                props.uPubStatus(false);
            } else {props.updateMsg("Error")}
        }).catch((err) => {
            console.log(err);
            props.updateMsg("Error, check console.")
        });
    }
}

export default UnpublishBtn;