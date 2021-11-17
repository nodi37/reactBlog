import React from "react";
import parse from "html-react-parser";
import {
    useLocation,
    useHistory
} from "react-router-dom";


function PostView(props) {
    const history = useHistory();
    const location = useLocation().pathname.slice(1);
    const [image, setImg] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [date, setDate] = React.useState("")

    React.useEffect(() => {
        if (props.useProps) {
            setImg(props.image);
            setTitle(props.title);
            setContent(props.content);
        } else {
            fetch(process.env.REACT_APP_API + location, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if(res.status===200){
                    res.json().then((json) => {
                    if(size(json)===9){
                        setImg(json.image);
                        setTitle(json.title);
                        setContent(json.content);
                        setAuthor(json.author);
                        const date = new Date(json.date);
                        const toShow = date.toLocaleString('en-GB',{
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        });
                        setDate(toShow);
                    } else {
                        history.push('/404');
                    }
                })
                } else {
                    history.push('/404');
                }
            }).catch((err) => {
                console.log(err)
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function size(obj) {
        var size = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    return (
        <div className="postcontent">
            <p onClick={history.goBack} className="closebtn">x</p>
            <img src={image} alt="" className="mainimg"/>
            <h1 className="posttitle">{title}</h1>
            {props.useProps?"":<><h5 className="dabar">Author: {author} | {date}</h5></>}
            {parse(content)}
            {props.useProps?"":<><h5 onClick={history.goBack} className="backbtn">Go back</h5></>}
        </div>
    )

}

//ADD BACK BUTTON :)

export default PostView;