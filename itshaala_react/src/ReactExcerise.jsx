// function userPassword(password) {
//         return alert(password);
//     }

export function Excerise() {
    function checkFunction() {
        return alert("Function sucessfully run"); 
    }

    function userName(username) {
        return alert(username);
    }

    function userPassword(password) {
        return alert(password);
    }

    return (
        <>
        <h1>Prateek Jadhav</h1>
        <ul>
            <li>start React framwork learn and aslo pratices</li>
            <li>note also create for reviews</li>
            <li>full on focus in React lecture</li>
        </ul>

        <button onClick={checkFunction}><strong>Check it Function</strong></button> {/* This React function defination */}

        {/* <button onClick={checkFunction()}><strong>Check it Function</strong></button> This JS function call */} 

        {/* Call passing arguments in function  */}
        <button onClick={()=> userName("pratikkkk02")}>Username</button>
        <button onClick={()=> userPassword("pratikkkk@123456789")}>password</button>
        </>
    )
}