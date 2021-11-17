import React from "react";
import { useHistory } from "react-router-dom"; 

function DeleteBtn(props) {
    const history = useHistory();
    const token = getCookie("Token");

    return (
        <button onClick={handler} className="dbtn">Delete</button>
    )

    function handler() {
        if (window.confirm("Are You sure? Your changes will not be save.")) {
            fetch(process.env.REACT_APP_API + props.postId, {
                method: 'DELETE',                      
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Token': token
                }
            }).then((res) => {
                if (res.ok) {
                    props.getPosts(props.postId)
                } else {
                    props.updateMsg("Error")
                }
            }).catch((err) => {
                console.log(err);
                props.updateMsg("Error, check console.")
            });
        }
    }
    
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        if (value.indexOf("Token")===-1){
            history.push('/login');
        } else {
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }
    }
}

export default DeleteBtn;