import React, {useState} from 'react'


export default function TextFrom(props) {
    const [text, setText] = useState("Write the something here...!");

    function convertUppercase() {
        console.log(text.toUpperCase());
    }

    return (
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">About info -</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" defaultValue={text} rows="10"></textarea>
                    <button className='btn btn-primary' onClick={convertUppercase}>Convert to Uppercase</button>
                </div>
            </div>
        </div>
    )
}
