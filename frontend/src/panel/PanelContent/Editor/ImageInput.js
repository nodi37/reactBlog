import React from "react";
import Compress from "react-image-file-resizer";

function ImageInput(props) {
    //var isResolved=1;
    return (
        <div className="image-input">
            <input type="file" name="image" id="image" accept="image/*" onChange={onChange}/>
            <label htmlFor="image">Select image</label>
        </div>

    )

    async function onChange(event) {
        const file = event.target.files[0];
        const fileName = event.target.files[0].name;
        const image = await resizeFile(file);
        props.setImgName(fileName);
        props.getImg(image)
    };  
    
    async function resizeFile(file) {
        return new Promise((resolve, reject) => {
            try {
                Compress.imageFileResizer(
                file,
                1920 ,
                1080,
                "JPEG",
                100,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64");
            } catch(error) {
                reject(error);
                props.setImgName("Image file compression error");
                //isResolved = 0;
            }
        })
    }
}

export default ImageInput;