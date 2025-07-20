import React from 'react'

export default function Navbar() {
  // const enterCompanyName = prompt("Enter the company name :");

  return (
    <div>
      <div className="navbar">
        <nav>
          <div><a href="CompanyName">companyName</a></div>
          <div><a href="Home">Home</a></div>
          <div><a href="About">About us</a></div>
          <div><a href="MailBox">Mail box</a></div>
          <div><a href="Contact">Contact</a></div>
          <div><a href="Login/Signup">Login/Signup</a></div>
        </nav>
      </div>
    </div>
  )
}
