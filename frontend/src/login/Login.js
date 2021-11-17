import React from "react";
import './login.css';
import { useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode';
 
function Login() {
    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errmsg, setErrMsg] = React.useState();
    const value = `; ${document.cookie}`;
    var timeout;
    
    if (value.indexOf("Token")!==-1){history.push('/panel/posts')} 

    function loginHandler() {
        clearTimeout(timeout);
        setErrMsg("");
        if (email.length < 1 || password.length < 1) {
            setErrMsg("Complete email and password!");
            timeout = setTimeout(() => {
                setErrMsg("");
            }, 3000);
        } else {
            fetch(process.env.REACT_APP_API + 'login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(r => r.json().then(data => {
                if (r.status === 401) {
                    setErrMsg(data.error);
                    timeout = setTimeout(() => {
                        setErrMsg("");
                    }, 3000);
                } else if(r.status===200) {
                    const tokenvalues = jwt_decode(data.token);
                    const expires = new Date(tokenvalues.exp*1000)
                    document.cookie = `Token=${data.token}; Expires=${expires}; path=/; SameSite=Lax; Secure;`;
                    history.push('/panel/posts');
                } else {
                    setErrMsg("Server error! Check console!");
                    console.log(data);
                }
            })).catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <main className="loginmain">
        <div className="loginbox">
            <h1>myBlogg login!</h1>
            <form method="post">
                <input type="email" name="email" id="email" placeholder="User" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                <p>{errmsg}</p>
                <button onClick={loginHandler} type="button">Login</button>
            </form>
        </div>
     </main>
    )

}

export default Login;