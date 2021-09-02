import React, { useState } from "react"
import ProgressBar from "./ProgressBar";
import "../styles/main.scss";
import { BiImageAdd } from "react-icons/bi";

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg"];

    const changeHandler = (e) => {
        let selected = e.target.files[0]
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError(null)
        } else {
            setFile(null)
            setError("Please select a valid type..")
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <BiImageAdd className='upload-icon'/>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile}/> }
            </div>  
        </form>
    )
}

export default UploadForm
