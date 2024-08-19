// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  
  // eslint-disable-next-line no-unused-vars
  let myObj ={
    username:"Almec",
    age: 20
  }
  // let newArr = [1, 2, 3]
  return (
    <>
      <Card username="Macbook" src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
      <Card username="Iphone" src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg"/>
      
    </>
  )
}

export default App
