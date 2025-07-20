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
