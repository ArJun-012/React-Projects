import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:count}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <button
            onClick={()=> setCount("white")}
            type="button"
            className="border border-black rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Button text
          </button>
          <button
            onClick={()=> setCount("black")}
            type="button"
            className="border rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Button text
          </button>
          <button
            onClick={()=> setCount("#CA8A04")}
            type="button"
            className="border rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Button text
          </button>
          <button
            onClick={()=> setCount("#DC2626")}
            type="button"
            className="border rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Button text
          </button>
          <button
            onClick={()=> setCount("#16A34A")}
            type="button"
            className="border rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Button text
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
