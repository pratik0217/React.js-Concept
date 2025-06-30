# Create react app 
- Step 1 :- npm create vite@latest (projectName) reactlearn.
 ![Screenshot 2025-06-30 235719](https://github.com/user-attachments/assets/1e7043a0-9c33-4f11-a8ab-65cf8ce4d3ed)
- Step 2 :- SELECT React
 ![Screenshot 2025-06-30 235801](https://github.com/user-attachments/assets/edfae529-4fff-4a15-bf78-047dc795b2d4)
- Step 3 :- SELECT Javascript
![Screenshot 2025-06-30 235830](https://github.com/user-attachments/assets/7fb8f4b2-42ad-41b1-9337-95680969e7d8)
- Step 4 :- CD (switch the current file) reactlearn (projectName).
![Screenshot 2025-07-01 000258](https://github.com/user-attachments/assets/0f5df5f9-8612-46fd-9e3a-6e225cd99e8b)
- Step 5 :- Install package Using syntax ( npm i )
![Screenshot 2025-07-01 000332](https://github.com/user-attachments/assets/a45fe63a-00bd-4203-ac9f-412aa3c238f9)
- Step Final(Last) :- npm run dev (for live the web page and do not use go live for live in HTML for react.js).
![Screenshot 2025-07-01 000740](https://github.com/user-attachments/assets/8eef76f4-d93a-4bf0-9190-4334d88b1415)

# Understanding JSX 
- JSX ( same of HTML tag but normal changes in JSX ).
- (import) - used for access to be another file attach on App.jsx.
- React function name also always start a capital letter and HTML tags must be lowercase.
- JSX is stricter than HTML. They have to close tags like <br/> and component also can't return multiple JSX tags.
- They have to wrap them into a shared parent like a <div> ... </div> or an empty <>....</>.
- In react specify a CSS class with (className). (IMP - Multiple class name change in onetime this is way ctrl + F find class= to replace className= ).
- It works the same way as the HTML (class) attribute.
- NOTE - If javascript use in react {----}.

# Adding Bootstrap in React
- Copy bootstrap CSS & JS file then paste the index.html file.
- Boostrap component paste in React function inside.

# Understanding props & ProTypes
- Props (properties) :- properties pass the value as agrument/attribute.
- Export default (functionName).
- export use pass the value to another file.
- another file export using import.
- Props throgh define the variable.value of properties.
Syntax - <Navbar title="CompanyName" contact="Contact"/>

 example - function Navbar(change) {
             <nav>
             <a className="navbar-brand" href="#">{change.title}</a>
             </nav>
}

# Protypes 
- Remaining this point 

# Understanding State & handling Event
- state :-
- useState is react hook that let's add a state variable to your component.
- syntax : (syntax is there on notes book and check out).
![Screenshot 2025-06-30 235054](https://github.com/user-attachments/assets/c18e763b-f717-488d-8df7-91d9f9f297b9)
- The convention is to name state variable like [something, something] using array distructuring.
![Screenshot 2025-06-30 235310](https://github.com/user-attachments/assets/c85ee9f7-865e-4feb-aa21-b787b64fce6c)
- setState function do not have a return value.
- NOTE - import React, {useState} from 'react' on the top of react code.
