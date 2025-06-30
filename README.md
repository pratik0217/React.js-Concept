# Create react app 
- npm create vite@latest (projectName) reactlearn.
- SELECT React
- SELECT Javascript
- CD (switch the current file) reactlearn (projectName).
- npm run dev (for live the web page and do not use go live for live in HTML for react.js).

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
