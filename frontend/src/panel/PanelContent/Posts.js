import React from "react";
import AddButton from "./Items/AddButton";
import PanelItem from "./Items/PanelItem";
import LoadMore from "./Items/LoadMore";
import {
    Link,
    useRouteMatch,
    useHistory
} from "react-router-dom";

function Posts() {
    const match = useRouteMatch();
    const history = useHistory();
    const [allPosts, updatePosts] = React.useState([]);
    const [currentcount, updateCurrentCount] = React.useState(0);
    const [loadable, isLoadable] = React.useState(true);
    const token = getToken();

    React.useEffect(() => {
        const value = `; ${document.cookie}`;
        if (value.indexOf("Token") === -1) {
            history.push('/login');
        } else {
                getPosts(0, 5);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        updateCurrentCount(allPosts.length)
    }, [allPosts]);

    return (
        <main className="panelmain">
            <Link to={`${match.url}/add`}>
                <AddButton />
            </Link>
            {allPosts.map((value, index)=>{
                    return <PanelItem type="post" key={value._id} postId={value._id} title={value.title} published={value.published} getPosts={refreshPosts}/>;
                })}
            <LoadMore loadable={loadable} handler={getPosts}/>
        </main>
    )

    async function getPosts() {
        if (loadable) {
            const skip = currentcount;
            const limit = currentcount + 5;
            fetch(process.env.REACT_APP_API + 'posts', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Token': token
                },
                body: JSON.stringify({
                    skip: skip,
                    limit: limit
                })
            }).then((res) => {
                res.json().then((json) => {
                    updatePosts([...allPosts, ...json.posts])
                    if (json.length > limit) {
                        isLoadable(true)
                    } else {
                        isLoadable(false)
                    }
                });
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    function refreshPosts(id) {
        function filter(item) {
            return item._id !== id;
        }
        var refreshedPosts = allPosts.filter(filter);
        updatePosts(refreshedPosts);
    }

    function getToken(){
        const value = `; ${document.cookie}`;
        const parts = value.split(`; Token=`);
        return parts.pop().split(';').shift();
    }
}

export default Posts;