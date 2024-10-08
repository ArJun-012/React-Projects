// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Card({username, src}) {
    console.log(username);
    
  return (
    <>
    <div className="w-[300px] rounded-md border">
      <img
        src={src}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-black">{username}</h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit sdbvfhsbvhmet consettrctetur adipisicing elit. Excepturi, debitis?
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
    </>
  )
}

export default Card