# React.js App code flow
- First of all, run the HTML file code then script file load the main.jsx file.
- HTML file have only two element first element div#root and 2nd element script.
- All project code render in div#root.

# File & Folder structure of react app
- package.json is most important file. If package.json file are not existed then project are not properly run.
- package-lock.json similer to the package.json. if changes in package.json then automatically changing in package-lock.json.
- gitigonre this is use for important file not push on github.

# JSX & Component in React
React is built using JSX & Components. Let’s break them down and understand how they work!

# What is JSX
- JSX stand for JavaScript Syntax Extension or JavaScript XML.
- JSX allows to the HTML tags written in JavaScript.
<img width="358" height="141" alt="image" src="https://github.com/user-attachments/assets/5109e937-d70a-4f31-9a5f-86647c01edc9" />

- JSX (JavaScript XML) is a special syntax in React that looks like HTML but works inside JavaScript. It makes UI code cleaner, readable, and more efficient.

# Without using JSX in React.
Step 1

<img width="791" height="63" alt="Screenshot 2025-07-20 183731" src="https://github.com/user-attachments/assets/93e39417-9e7d-4915-90c3-63161aafc739" />

Step 2

<img width="874" height="131" alt="Screenshot 2025-07-20 183658" src="https://github.com/user-attachments/assets/0c61a0eb-6968-4951-ba0d-d2edf95da50b" />

Final code - 
<img width="1229" height="671" alt="Screenshot 2025-07-20 183758" src="https://github.com/user-attachments/assets/0ddf398f-3d78-46dc-be51-1498da0e2616" />

### 🎯 Why JSX?
✅ **Looks Like HTML** – But it's inside JavaScript! <br>
✅ **Faster Rendering** – React optimizes it behind the scenes. <br>
✅ **Safer** – Prevents XSS attacks by escaping values.

### 🛠 Example of JSX
<img width="663" height="77" alt="Screenshot 2025-07-19 204204" src="https://github.com/user-attachments/assets/01a09367-3be4-42d7-9069-e2b48603c059" />

🔹 This looks like HTML, but it’s actually JavaScript!

# JSX with Curly Braces
<img width="1324" height="624" alt="Screenshot 2025-07-20 190019" src="https://github.com/user-attachments/assets/0a388941-e2ce-4027-97bf-495d80d4326f" />

# Interview Question
Q What is JSX ?

Ans - JSX stand for JavaScript Syntax Extension and also Know as JavaScript XML

# React Component
<img width="1211" height="551" alt="Screenshot 2025-07-20 155651" src="https://github.com/user-attachments/assets/b23fe2d8-0e96-4677-aee7-ff23107b3bfe" />
<img width="1213" height="422" alt="Screenshot 2025-07-20 155712" src="https://github.com/user-attachments/assets/2fd7bd5a-7fe0-493b-afa7-eb714319d0e0" />
- create project then project divided into multiple section(Part).
<img width="1682" height="815" alt="Screenshot 2025-07-20 160003" src="https://github.com/user-attachments/assets/aab455e6-583a-4fdc-999b-b867da0743c4" />
- Component always declare in first letter in captical format.

# Export and Import React
<img width="1338" height="653" alt="Screenshot 2025-07-20 160827" src="https://github.com/user-attachments/assets/6f3c60ad-fb48-4523-bc4b-ec2bf1add5ee" />
export - send the component file to excuting also importing in App.jsx
import - Recive the file of sending exported file.

# Export default & Export react
- export default component one time use and this export default component import (componentName) from 'component file location'
<img width="651" height="458" alt="Screenshot 2025-07-20 165344" src="https://github.com/user-attachments/assets/b4b21f0f-38c1-47db-a123-146fb4498049" />

- export use for multiple componemnt render in main App.jsx import {componentName} from 'file location'
<img width="884" height="667" alt="Screenshot 2025-07-20 165255" src="https://github.com/user-attachments/assets/296ec9a1-06d6-4072-897b-5abc9d7ebe86" />

- this way import of export default & export component file.
<img width="851" height="62" alt="Screenshot 2025-07-20 165325" src="https://github.com/user-attachments/assets/47909941-1124-43a9-8988-b096c6b80806" />

Note - Not required only use component are export. they are also exporting variable.
     - Exported Component/Variable declare {...}

# Click Event and Function call
<img width="1222" height="588" alt="Screenshot 2025-07-20 215640" src="https://github.com/user-attachments/assets/81c8a306-6bad-4798-94fc-fcbde441277f" />

- Event always write in camelCase format for React function.
- Event not requried write in camelCase for JavaScript(JS) function.
<img width="805" height="241" alt="Screenshot 2025-07-20 225011" src="https://github.com/user-attachments/assets/265e2050-3c95-4232-a58e-d8c64f7a0adf" />

- function call {functionName()} as this way then showing error and automatically run in React but function call using function defination {functionName} this way then successfully run.
Call Arrow function/function passing parameter :-
- Syntax :-
 <img width="936" height="120" alt="Screenshot 2025-07-20 224930" src="https://github.com/user-attachments/assets/afe6dfb7-0bc4-464b-b9cc-6eb43c6c0797" />

Interview Question - 

Q) Why automatically calling function ?

Ans - Because if calling function using Braces as JS format {functionName()} in react then calling automatically function.
    - Solution is always remember if calling function in react then use function defination {functionName} for function calling in React.

# Upgrade React version
<img width="1279" height="496" alt="Screenshot 2025-07-20 230119" src="https://github.com/user-attachments/assets/40b1a7f5-ee23-4879-b804-ec4ccf663d04" />

Check current version in React
- Click on the package.json then searching dependencies they have version of react and also react-dom version.
- Dependencies have a current version of react & react-dom.
<img width="650" height="76" alt="Screenshot 2025-07-20 232335" src="https://github.com/user-attachments/assets/f8ff1488-8595-43cc-b636-a8793994ed06" />
this img show the current version of react and react-dom.

Update React version in project :- 
- first check current file of project then open terimal and type npm install react@rc
<img width="1408" height="52" alt="Screenshot 2025-07-20 232410" src="https://github.com/user-attachments/assets/791ddcbb-917d-4a99-b49b-e664b6b3314e" />

- Similar process of installing react-dom.
<img width="1485" height="34" alt="Screenshot 2025-07-20 232446" src="https://github.com/user-attachments/assets/f3cef07f-54c6-42a7-bd48-ee8bd99c7ea4" />

- Then update to latest version of react & react-dom in package.json (dependencies) and also automatically updated package-lock.json file.
<img width="571" height="127" alt="Screenshot 2025-07-20 232426" src="https://github.com/user-attachments/assets/6274d0c9-6444-4291-9966-9ef83efc0680" />

Interview Question :- 
- What's latest version of react ?
- How to check version of react in project ?
- How to install latest version of react in project ?
- Why updating react version in project ?
- What is mean of "react": 18.9.1 point ?

# State in React.JS
<img width="1458" height="648" alt="Screenshot 2025-07-20 235134" src="https://github.com/user-attachments/assets/b2a9835c-bd21-43be-8eae-457e4aa67c34" />


Why state requried :-  
- If change the value and re-render on web browser(UI) they use State.
- Can the use variable through value change but chenging value not re-render in Web browser.

What is State :- 
- State is container to store data like variable.
- this is mutable and dynamic.
- We have to import it when we want to use it.
- It re-render component automatically so that data can visible on UI.

What is State :- 
- Hooks are the special feature of functional component.
- Hooks let you see different react feature from your components.
               - States
               - Life cycle methods
               - Side effects etc.

  How to check hook :-
  - If you see use in starting of the word in react then called as Hooks
  Example - {useState, useEffect, useContext, etc.}

Syntax State :- 
<img width="1538" height="841" alt="Screenshot 2025-07-21 010606" src="https://github.com/user-attachments/assets/453f1753-873a-4cd7-87d7-93f811ee8e90" />

Interview Question :- 
- What is the difference between variable & State ?
- What us syntax if state ?
- How to use double state ?
- Can you set variable working in function ?

# Toggle or Hide and Show in React
<img width="1605" height="610" alt="Screenshot 2025-07-21 094859" src="https://github.com/user-attachments/assets/a1abe5c3-696a-48a2-ba90-45f7c0cc5851" />

Syntax-
<img width="1233" height="583" alt="Screenshot 2025-07-21 104917" src="https://github.com/user-attachments/assets/5964573b-5afa-4abc-89f2-12d066c6237c" />

Final UI (Web Browser) :- 
<img width="1051" height="152" alt="Screenshot 2025-07-21 105203" src="https://github.com/user-attachments/assets/b27f4072-df0a-4cf9-809d-ca6456b2a5b3" />

# Multiple conditional in React 
Syntax - 
<img width="1194" height="812" alt="Screenshot 2025-07-21 112410" src="https://github.com/user-attachments/assets/e901aee5-5c7e-4db7-9e60-bccf39e4ce88" />

Final UI :- 
<img width="1066" height="153" alt="Screenshot 2025-07-21 112946" src="https://github.com/user-attachments/assets/7678fb73-683f-4d68-8ba3-e6c2a0f022b7" />

# Props in React
<img width="842" height="366" alt="Screenshot 2025-07-21 194539" src="https://github.com/user-attachments/assets/bf409b1c-c66a-4f3d-b7fb-317bae4bb6eb" />

What is props ?
- props use for one component data passing/transfer to another component.
- Note - props are not a parameter but uses same of parameter likes.

Syntax - 
<img width="1086" height="125" alt="Screenshot 2025-07-21 235952" src="https://github.com/user-attachments/assets/93c95134-372d-4773-a55f-c7e1b5988f20" />
or
<img width="1100" height="124" alt="Screenshot 2025-07-22 000006" src="https://github.com/user-attachments/assets/85d14936-eca2-44e6-bd56-b4491fd5e06c" />

Note : 
- Both Syntax valid for declaring props (use props).
- PropsName not compalsory for declaring props|| declare on project related name.

<img width="760" height="300" alt="Screenshot 2025-07-21 231125" src="https://github.com/user-attachments/assets/2bcef2ee-3266-4355-a1dc-a5057379d0bb" />

Default Props :- 
<img width="685" height="218" alt="Screenshot 2025-07-22 000348" src="https://github.com/user-attachments/assets/52100abe-dab9-47df-94ed-03685fed2d0a" />

Pass JSX with props & Change style with props :- 

Step 1 
<img width="1376" height="429" alt="Screenshot 2025-07-22 000526" src="https://github.com/user-attachments/assets/962cdac9-f1c8-45cb-b0bb-806359507bb7" />

Step 2
<img width="1334" height="395" alt="Screenshot 2025-07-22 000328" src="https://github.com/user-attachments/assets/ec0fbf56-19e6-4259-8783-34d9d62a85b6" />

Final UI 
<img width="712" height="465" alt="Screenshot 2025-07-22 000715" src="https://github.com/user-attachments/assets/5e608163-3cc0-4eca-8109-140df963d043" />

# Get Input field Value
<img width="808" height="325" alt="Screenshot 2025-07-22 094515" src="https://github.com/user-attachments/assets/4e7a2efa-019b-4606-8c14-6204c99a5baa" />

- If interview ask the how to get value of input tags then use {onChange} event and also using state.
Syntax -
<img width="1489" height="471" alt="Screenshot 2025-07-22 103418" src="https://github.com/user-attachments/assets/29a297bf-f012-4738-a33a-5cfaa9088dc8" />

Final UI - 
https://github.com/user-attachments/assets/f803d906-81b3-47ff-8f5e-2e21e8167568

Interview Question - 
Q. How to get value of input tag ?
Q. How to get value of input clear using btn ? 

# Controlled Component :
What is Controlled component ?
- A controlled component is a form field whose input field value is controlled by react's State.

How it works ?
- Store input field value in State.
- Use change handler with input field.
- value attribute attached with State.

Benefits of controlled component - 
- Single source of truth
- Validation and Manipulation before submit
- Dynamic updates values.

Syntax -
<img width="1665" height="851" alt="Screenshot 2025-07-22 173811" src="https://github.com/user-attachments/assets/b405a80c-00db-43da-8a4c-6b6c67f32a2b" />

# Handle checkbox 
<img width="1545" height="837" alt="Screenshot 2025-07-22 193426" src="https://github.com/user-attachments/assets/6a885863-b691-4ad2-ae67-78fd1a49218d" />
<img width="1544" height="799" alt="Screenshot 2025-07-22 193503" src="https://github.com/user-attachments/assets/0e199926-62b9-4e21-a054-99d41cd11218" />
<img width="1548" height="804" alt="Screenshot 2025-07-22 193552" src="https://github.com/user-attachments/assets/841aca7b-13aa-4fc4-8dd8-77cb533a2801" />

Interview Question 
Q. How to add & delete on array ?
Q. What is filter() and Why this use in program ?

# Handle Radio buttom & dropdown
<img width="786" height="371" alt="Screenshot 2025-07-22 193253" src="https://github.com/user-attachments/assets/4d637ff0-d54d-4567-bfdd-3795e9b6bcd5" />

Code -
<img width="1827" height="831" alt="Screenshot 2025-07-22 203525" src="https://github.com/user-attachments/assets/7bd85a41-bcb6-44c4-8ea7-2f93e3f76bee" />
<img width="1816" height="627" alt="Screenshot 2025-07-22 203545" src="https://github.com/user-attachments/assets/125f66cd-48f4-485a-ad84-832e30729583" />

# Loop in JSX with Map Function
<img width="603" height="289" alt="Screenshot 2025-07-22 203906" src="https://github.com/user-attachments/assets/4ca1aa09-979a-44e6-865c-b721f9f46ef9" />

- Loop use only before return keyword then loop is valid and also working properly loop.
- You want use loop in JSX component then use Map function on JSX.

Syntax - 
<img width="845" height="316" alt="Screenshot 2025-07-22 230108" src="https://github.com/user-attachments/assets/07b9cfa7-b8f3-4132-ad97-42fa8c3f5aa7" />

Example with print the table reference data of object.
<img width="1535" height="834" alt="Screenshot 2025-07-22 230313" src="https://github.com/user-attachments/assets/7c15d8b9-80ee-4f3b-bf0b-98d49e042217" />
<img width="1541" height="775" alt="Screenshot 2025-07-22 230347" src="https://github.com/user-attachments/assets/571106bf-fa17-4b8e-99eb-792723f84680" />
<img width="1542" height="801" alt="Screenshot 2025-07-22 230415" src="https://github.com/user-attachments/assets/1a45c0e4-7a12-495b-a679-26f0c9cdf0ae" />
<img width="1548" height="751" alt="Screenshot 2025-07-22 230507" src="https://github.com/user-attachments/assets/b158e2ce-c58a-47f0-8a10-201c8dc71429" />

Result - 
<img width="692" height="223" alt="Screenshot 2025-07-22 230653" src="https://github.com/user-attachments/assets/c76ff3f6-7e9a-4c6a-a799-63a37bff9697" />

# Array Nested looping with component 
<img width="748" height="361" alt="Screenshot 2025-07-22 235323" src="https://github.com/user-attachments/assets/f68d4259-3c6f-4dfc-921d-cc426bee540d" />

Code - file name :- ArrayNestedLoop.jsx

# useEffect() Hooks 
<img width="773" height="345" alt="Screenshot 2025-07-23 123334" src="https://github.com/user-attachments/assets/f33ba0ab-d5fe-49ca-91f2-aecebc1184df" />
<img width="814" height="268" alt="Screenshot 2025-07-26 121854" src="https://github.com/user-attachments/assets/1878cd96-8f13-429a-975b-8d86d6b1aa85" />

Handling dependecy :- 
<img width="724" height="436" alt="Screenshot 2025-07-26 123939" src="https://github.com/user-attachments/assets/c1835664-e795-480d-95df-3a70b06dc17d" />

Handle Props side effect with useEffect in Component & Component life cycle in React
<img width="796" height="316" alt="Screenshot 2025-07-26 130951" src="https://github.com/user-attachments/assets/4acf923c-1246-4385-a659-6ec9da1ca568" />

<img width="794" height="319" alt="Screenshot 2025-07-26 152907" src="https://github.com/user-attachments/assets/13837e6d-c9e3-4d39-972f-d8a74eaf2f70" />

<img width="738" height="376" alt="Screenshot 2025-07-26 153303" src="https://github.com/user-attachments/assets/9b15e902-2a1e-4436-acf8-c226a27643de" />

<img width="869" height="396" alt="Screenshot 2025-07-26 153337" src="https://github.com/user-attachments/assets/cc23596b-bb0d-4f09-8d15-ff6c0acb17c0" />

<img width="1120" height="725" alt="Screenshot 2025-07-26 155721" src="https://github.com/user-attachments/assets/b12fad14-c64e-488a-a438-8a8b81518306" />

<img width="1163" height="827" alt="Screenshot 2025-07-26 155853" src="https://github.com/user-attachments/assets/320d1f77-5e82-4ab1-92df-9716b9b56f1e" />

<hr>
# Remaining style part
<hr>

# useRef hook in React.js 
<img width="804" height="290" alt="Screenshot 2025-07-27 194843" src="https://github.com/user-attachments/assets/4965a17c-d9a2-46bf-bca7-10fb6eb28406" />

- control input field and also HTML tags with useRef.

Code :- 
<img width="1415" height="855" alt="Screenshot 2025-07-27 205258" src="https://github.com/user-attachments/assets/59db96b9-0288-43e5-a35b-c5d976d8ddd2" />

# Uncontrolled component in React.js 
<img width="795" height="246" alt="Screenshot 2025-07-27 205124" src="https://github.com/user-attachments/assets/90dde961-810f-49a2-bd44-4b073002064c" />

What is uncontrolled component ? 
- If you have getting the input field value using state then called Controlled Component.
- Don't use state for getting value of Input field then it's called Uncontrolled component.

Code - 
<img width="1546" height="778" alt="Screenshot 2025-07-27 212839" src="https://github.com/user-attachments/assets/4dd06117-18aa-4c93-a8bf-601b9d2932c8" />

# Pass function in Component as Props 
<img width="874" height="283" alt="Screenshot 2025-07-27 212756" src="https://github.com/user-attachments/assets/225c4fd7-0943-457c-9625-c43e7fd03be1" />

- Create function and also this function use many component then created function declare in the parent component for usable in chlid component.
- Create function pass using state to another child component.

code - 
step 1 - Delcare(create) function in parent component
<img width="633" height="118" alt="Screenshot 2025-07-27 234755" src="https://github.com/user-attachments/assets/17236aae-921f-4f74-a274-8aaddf69df49" />

step 2 - create child component.
<img width="1139" height="290" alt="Screenshot 2025-07-27 234842" src="https://github.com/user-attachments/assets/29350d0a-4713-4120-bfb5-819bf7f13def" />

step 3 - child component delcare in parent component for using function state through.
<img width="977" height="144" alt="Screenshot 2025-07-27 234827" src="https://github.com/user-attachments/assets/b3ebe628-303b-4107-88bd-86bdab5987a9" />

<hr>
<strong> <em> Forward ref(useRef) in React </em> </strong>
<hr>
<img width="836" height="265" alt="Screenshot 2025-07-28 005634" src="https://github.com/user-attachments/assets/d9954569-b742-465a-acee-9dc19dac7779" />

What is forward ref ?
- Foreward ref and also Pass function in component as props both are same concept.

Declare ref
<img width="859" height="119" alt="Screenshot 2025-07-28 010342" src="https://github.com/user-attachments/assets/7b410d1b-ba78-4c14-81ea-f16ce0b1e5d8" />

Implement ForwardRef before react 19 version

<img width="1308" height="435" alt="Screenshot 2025-07-28 010257" src="https://github.com/user-attachments/assets/995876a6-d418-4e75-a25d-2fb870a19f3d" />

Implement forwardRed in React 19

<img width="722" height="322" alt="Screenshot 2025-07-28 010216" src="https://github.com/user-attachments/assets/c7f87520-bdd8-4d18-aff1-4e98f0edf8b1" />

Parent component

<img width="859" height="119" alt="Screenshot 2025-07-28 010342" src="https://github.com/user-attachments/assets/06b28b29-2781-4ef4-adaa-efa3cec0834e" />

<hr>
<strong> <em> useFormStatus Hook in React </em> </strong>
<hr>
<img width="815" height="282" alt="Screenshot 2025-07-28 130815" src="https://github.com/user-attachments/assets/ef05d908-2f50-4207-b4d1-9d4e28a46d6e" />

Code - 
<img width="1515" height="841" alt="Screenshot 2025-07-28 143621" src="https://github.com/user-attachments/assets/eeb4f0d2-1198-4305-ba27-5dc7db683a42" />

<hr>
<strong> <em> useTransition Hook in React </em> </strong>
<hr>
<img width="828" height="309" alt="Screenshot 2025-07-28 140545" src="https://github.com/user-attachments/assets/2d75d732-ec9f-4d2b-b494-8af5488401ec" />

Using state - 

<img width="1512" height="572" alt="Screenshot 2025-07-28 142016" src="https://github.com/user-attachments/assets/9aba592d-4e99-41c9-8e9b-522a4c767aa4" />

React version 19 -

<img width="1690" height="650" alt="Screenshot 2025-07-28 143314" src="https://github.com/user-attachments/assets/65cc5337-df56-4790-a0e4-baaffa6fd03f" />

Interview Question - 
Q0 what is difference between version 18 & 19 for useTransition ?

<hr>
<strong> <em> Lifting State up in React </em> </strong>
<hr>
<img width="804" height="267" alt="Screenshot 2025-07-28 165021" src="https://github.com/user-attachments/assets/03b7af5f-cd2f-453e-a4f7-9dc2d93c566c" />
<img width="716" height="399" alt="Screenshot 2025-07-28 165140" src="https://github.com/user-attachments/assets/8f955c30-4bae-4bfa-920e-7f139fceb155" />

- Lifting state up use in some data share one component to another component using state it called ligting state up.

Code - Apna College 
- LiftingStateUp_AddUser.jsx
- LiftingStateUp_DisplayUser.jsx
