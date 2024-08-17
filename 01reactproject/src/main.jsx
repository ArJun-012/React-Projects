// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime"
// import App from './App.jsx'

// function App(){
//     return(
//         <div>
//             <h1>Custom app !</h1>
//         </div>
//     )
// }
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//    <a href='https://www.google.com' target='_blank'>Click me</a>
// )
const anotherUser = "Coffee with me"
const reactElement = React.createElement(
    'a',
    {href: 'https://www.google.com', target: '_blank'},
    // 'click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    
    reactElement
    
)
