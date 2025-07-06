import React, {useState} from 'react'


export default function TextFrom(props) {
    const [text, setText] = useState("");

    const handleUpperCase = () => {
        console.log("Convert uppercase button clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
    }
    
    const handleLowerCase = () => {
        console.log("Convert lowercase button clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    function handleOnChange(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <div className="container my-1">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">About info -</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Write something for converting Uppercase format' onChange={handleOnChange} rows="10"></textarea>
                    <button className='btn btn-primary my-2 mx-1' onClick={handleUpperCase}>Convert to Uppercase</button>
                    <button className='btn btn-primary' onClick={handleLowerCase}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear</button>

                    <textarea className="form-control" id="exampleFormControlTextarea1" readOnly value={text} rows="5">{text}</textarea>
                </div>

            </div>

            <div className="container my-1">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} count and {text.length} of characters</p>
                <p>{0.008 * text.split("").length} Minute for Read</p>
                <p>Preview text</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
