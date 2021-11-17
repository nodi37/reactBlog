import React from "react";
import Post from './Post';
import LoadMore from './LoadMore';

function MainElement(props) {
    const {
        allPosts,
        updatePosts,
        currentcount,
        updateCurrentCount,
        loadable,
        isLoadable,
        alreadyloaded,
        isAlrLoaded
    } = props;

    React.useEffect(() => {
        if (!alreadyloaded) {
            getPosts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        updateCurrentCount(allPosts.length)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPosts]);

    return (
        <main className="indexmain">
            <div className="elements">
            {allPosts.map((value, index)=>{
                const dsc = value.description[0].toUpperCase() + value.description.slice(1);
                const sDsc = dsc.slice(0,400);
                const rDsc = sDsc.slice(0, sDsc.lastIndexOf(" ")) + "...";
                return <Post key={value._id}  image={value.image} title={value.title} description={rDsc} content={value.content} date={value.date} author={value.author}/>
            })}
            </div>
                <LoadMore handler={getPosts} loadable={loadable}/>
        </main>
        )

    async function getPosts() {
        if (loadable) {
            const skip = currentcount;
            const limit = currentcount + 5;
            fetch(process.env.REACT_APP_API + 'allposts', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    skip: skip,
                    limit: limit
                })
            }).then((res) => {
                res.json().then((json) => {
                    updatePosts([...allPosts, ...json.posts]);
                    isAlrLoaded(true)
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
}

export default MainElement;