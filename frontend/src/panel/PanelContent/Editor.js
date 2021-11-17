import React, {
    useRef,
    useState
} from "react";
import {
    useLocation
} from "react-router";
import ImageInput from "./Editor/ImageInput";
import PostView from "../../index/PostView";
import Quill from "./Editor/Quill";
import {
    useHistory
} from "react-router-dom";
import Saving from "./Saving";
import SaveStatus from "./Editor/SaveStatus";

function Editor() {
    const [imgName, setImgName] = useState("");
    const [imgFile, getImg] = useState("");
    const [title, setTitle] = useState("");
    const [ViewVisible, setView] = useState(0);
    const [content, setContent] = useState("");
    const [isSaving, savingStatus] = useState(false);
    const [autoSave, turnAutoSave] = useState(false);
    const [autoSaveStatus, updateSaveStatus] = useState("");
    const [isSaved, savedStatus] = useState(false);
    const [postid, setPostId] = useState("");
    const [description, setDescription] = useState("This is Read More text under post title.");
    const history = useHistory();
    const location = useLocation();
    const savedCallback = useRef();
    const token = getToken();
    

    //setInterval triggers tick function which contains refer to current version of callback func which is changed everytime when anything is updated.
    React.useEffect(() => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; Token=`);
        if (value.indexOf("Token") === -1) {
            history.push('/login');
        } else {
            if (parts.length === 2) {
                if (!(location.pathname.indexOf("/edit/") === -1)) {
                    const posttoload = location.pathname.slice(location.pathname.indexOf("/edit/") + 6, location.pathname.indexOf("/edit/") + 30)
                    const locationVerify = location.pathname.slice(location.pathname.indexOf("/edit/") + 6);
                    if (posttoload.length < 24 || locationVerify.length>24) {
                        history.push('/panel/404');
                    } else {
                        fetch(process.env.REACT_APP_API + posttoload, {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                'Token': token
                            }
                        }).then((res) => {
                            res.json().then((json) => {
                                if(json!==null){
                                setPostId(json._id);
                                setContent(json.content);
                                setTitle(json.title);
                                getImg(json.image);
                                setDescription(json.description);
                                savedStatus(true);
                            } else {
                                history.push('/panel/404');
                            }
                            });
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(() => {
        savedCallback.current = saveDraft;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [saveDraft])


    React.useEffect(() => {
        var timerid;
        if (autoSave) {
            function tick() {
                savedCallback.current();
            }
            timerid = setInterval(tick, 20000);
        }
        return () => {
            clearInterval(timerid);
        };
    }, [autoSave]);

    function Cancel() {
        if (window.confirm("Are You sure? Unsaved changes will be lost.")) {
            history.push("/panel/posts");
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function saveDraft() {
        autoSave ? updateSaveStatus("...") : savingStatus(true);
        if (!isSaved && (title.length > 1)) {
            fetch(process.env.REACT_APP_API, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Token': token
                },
                body: JSON.stringify({
                    image: imgFile,
                    title: title,
                    content: content,
                    description: description
                })
            }).then((res) => {
                res.json().then((json) => {
                    setPostId(json.id);
                    savedStatus(true);
                    if (autoSave) {
                        updateSaveStatus("OK");
                        setTimeout(() => {
                            updateSaveStatus("");
                        }, 5000);
                    }
                });
                savingStatus(false);
            }).catch((err) => {
                console.log(err);
                updateSaveStatus("Error");
            });
        } else if (isSaved) {
            (title.length < 1) ? setTitle("Add title"): setTitle(title);
            fetch(process.env.REACT_APP_API + postid, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Token': token
                },
                body: JSON.stringify({
                    image: imgFile,
                    title: (title.length < 1) ? "Add title" : title,
                    content: content,
                    description: description
                })
            }).then((res) => {
                res.json().then((json) => {
                    setPostId(json.id);
                    if (autoSave) {
                        updateSaveStatus("OK");
                        setTimeout(() => {
                            updateSaveStatus("");
                        }, 5000);
                    }
                });
                savingStatus(false);
            }).catch((err) => {
                console.log(err);
                updateSaveStatus("ErroR");
            });
        } else {
            savingStatus(false);
            alert("Draft needs to have title to be saved.");
        }
    }    

    function changeAutosave() {
        if (autoSave) {
            turnAutoSave(false);
        } else {
            turnAutoSave(true);
        }
    }

    function getToken(){
        const value = `; ${document.cookie}`;
        const parts = value.split(`; Token=`);
        return parts.pop().split(';').shift();
    }

    return (
        <main className="panelmain">
        {isSaving?<Saving />:<><h1 className="title">Title:{title}</h1>
        <input type="text" name="title" id="title" placeholder="" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <h2 className="image">Image: {imgName}</h2>
        <ImageInput postid="dontknowyet" setImgName={setImgName} getImg={getImg}/>
        <div className="qeditor">
        <Quill setContent={setContent}  content={content}/>
        </div>
        <h2 className="image">Post description:</h2>
        <textarea rows="6" className="pDesc" onChange={(e)=>{setDescription(e.target.value)}} value={description}></textarea>
        <div className="buttons editorbuttons">
        <button className="sbtn" onClick={saveDraft}>Save</button>
            <input type="checkbox" name="autosave" id="asave" checked={autoSave} onChange={changeAutosave}/>
            <p>Autosave</p><SaveStatus status={autoSaveStatus}/>
            <button className="pbtn" onClick={()=>{setView(ViewVisible?0:1)}}>Post review</button>
            <button className="cbtn" onClick={Cancel}>Cancel</button>
        </div>
        {ViewVisible?<PostView useProps={true} title={title} image={imgFile} content={content}/>:""}</>}
        </main>
    )
}

export default Editor;