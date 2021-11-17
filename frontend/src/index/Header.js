import React from 'react';
import {
    useHistory,
    useLocation
} from 'react-router';
import './style.css';

function Header(props) {
    const history = useHistory();
    const location = useLocation();
    const {
        sPostsUpd,
        searchHandler,
        searchKw
    } = props;

    function handler(e) {
        searchHandler(e.target.value);
        if (location.pathname !== '/search' && searchKw.length>1) {
            history.push('/search')
        }
        if (searchKw.length > 1) {
            fetch(process.env.REACT_APP_API + 'search', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    searchKw: searchKw
                })
            }).then((res) => {
                res.json().then((json) => {
                    sPostsUpd(json.posts)
                });
            }).catch((err) => {
                console.log(err);
            });
        } else {
            sPostsUpd([]);
        }
    }

    function blurHandler() {
        if(searchKw.length<1){
            history.goBack();
            searchHandler("");
            sPostsUpd([]);
        }
    }

    return (
        <header>
            <div className="cpart">
                <div className="logo">
                    <a href="/" className="href">myBlogg</a>
                </div>
                <div className="searchinput">
                    <input type="text" placeholder="Search..." value={props.searchKw} onBlur={blurHandler} onChange={handler}/>
                </div>
            </div>
        </header>
    )

}
export default Header;