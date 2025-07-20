import React from 'react'

const companyInfo = {
    companyName : "TCS : Tata Concentency Serives",
    Role : "React Web Frontend Developer",
    CompanyAddress : "Shri Datt Housing Society, Pimpri-Chinchwad, Pune - 411062"
}

export default function JSXCurlyBraces() {
    let name = "Pratik Nandkumar Jadhav";
    return (
        <div>
            <h1>{name}</h1>
            <h3>Company : {companyInfo.companyName}</h3>
            <p>Role : {companyInfo.Role}</p>
            <p>Address : <address>{companyInfo.CompanyAddress}</address></p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quis veritatis cum sed quo laudantium, accusantium omnis ex similique unde ad dolores soluta corrupti laboriosam excepturi quam fugit quia vero? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque vitae esse, possimus neque maxime sequi voluptas fugiat, officiis ipsa ipsum quisquam nisi reprehenderit sunt debitis tenetur suscipit corrupti nulla quo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aliquid ipsum odio accusantium suscipit recusandae praesentium temporibus doloribus quis, qui dolores sunt unde beatae fuga eligendi. Hic quisquam iusto modi.</p>
        </div>
    )
}
