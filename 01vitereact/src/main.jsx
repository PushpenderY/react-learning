import React, { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'


function MyApp(){
   return (
   <h1>Hello from MyAPP</h1>
   )
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit google'
// }

const reactElement =  React.createElement(
    'a',
    {href: 'https://google.com', target:'_blank'},
    'click here to visit google'
)

createRoot(document.getElementById('root')).render(
    // <>
    // <MyApp />
    // reactElement
    //</>
    <App />
)
