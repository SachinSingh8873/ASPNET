import{r,u as c,j as e}from"./index-J4wkH6Sx.js";import{a as d}from"./axios-upsvKRUO.js";function g(){const[o,a]=r.useState(""),[l,n]=r.useState(""),i=c();function u(s){s.preventDefault(),d.post("http://localhost:3001/login",{email:o,password:l}).then(t=>{console.log(t),t.data==="Login Successfull"?(alert("Login Successfull"),i("/dashboard")):alert("Invalid Credentials")}).catch(t=>console.log(t))}return e.jsx("div",{className:"flex items-center justify-center bg-black bg-opacity-20 min-h-screen rounded-box",children:e.jsxs("div",{className:"w-full max-w-sm bg-white p-10 rounded-box shadow-md",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800 text-center mb-5",children:"Login"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-600 mb-2",children:"Email ID"}),e.jsx("input",{type:"email",id:"email",placeholder:"Enter your Registered Email",required:!0,className:"w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",onChange:s=>a(s.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-600 mb-2",children:"Password"}),e.jsx("input",{type:"password",id:"password",placeholder:"Enter your password",required:!0,className:"w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",onChange:s=>n(s.target.value)})]}),e.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition",children:"Login"}),e.jsxs("p",{className:"mt-4 text-sm text-gray-600 text-center",children:["Don't have an account?"," ",e.jsx("a",{href:"/register",className:"text-blue-500 hover:underline",children:"Register here"})]})]})]})})}export{g as default};
