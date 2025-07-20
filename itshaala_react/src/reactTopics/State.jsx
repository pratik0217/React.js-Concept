import { use, useState } from "react";

export default function State() {
    const [heading, setHeading] = useState("CompanyName");

    let handleChangeHeading = () => {
        setHeading("Excellent Mind Solution Pvt. Ltd.");
        console.log("Scuessfully..")
    }

    const [count, setCount] = useState(0);

    // const handleCountUpdate = () => {
    //     setCount(count +1);
    // }
    return (
        <>
            <div>
                <h1>{heading}</h1>
                <button onClick={handleChangeHeading}>Change heading</button>
            </div>

            <div>
                <h3>Count : {count}</h3>
                <button onClick={()=> setCount(count + 1)}>Update count +1</button>
            </div>
        </>
    )
}