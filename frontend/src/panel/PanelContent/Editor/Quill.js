import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Quill(props) {
    const modules = {
        toolbar: {
            container: [
                [{ 'size': ['small', false,] }], 
                [{ 'header': 1 }, { 'header': 2 }],
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block', 'link','image'],
                [{ 'script': 'sub'}, { 'script': 'super' }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'indent': '-1'}, { 'indent': '+1' }]
            ],
            // handlers: {
            //     'image': imageHandler
            // }
        }
    }

    // function imageHandler() {
    //     let fileInput = this.container.querySelector('input.ql-image[type=file]');
    //     if (fileInput == null) {
    //       fileInput = document.createElement('input');
    //       fileInput.setAttribute('type', 'file');
    //       fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
    //       fileInput.classList.add('ql-image');}
    //     }

//RESZTA KODU DO PRZEMYŚLENIA
    //       fileInput.addEventListener('change', () => {
    //         if (fileInput.files != null && fileInput.files[0] != null) {
    //           let reader = new FileReader();
    //           reader.onload = (e) => {
    //             let range = this.quill.getSelection(true);
    //             this.quill.updateContents(new Delta()
    //               .retain(range.index)
    //               .delete(range.length)
    //               .insert({ image: e.target.result })
    //             , Emitter.sources.USER);
    //             fileInput.value = "";
    //           }
    //           reader.readAsDataURL(fileInput.files[0]);
    //         }
    //       });
    //       this.container.appendChild(fileInput);
    //     }
    //     fileInput.click();

    return (
        <ReactQuill modules={modules} theme="snow" value={props.content} onChange={props.setContent}/>
    );
}

export default Quill;