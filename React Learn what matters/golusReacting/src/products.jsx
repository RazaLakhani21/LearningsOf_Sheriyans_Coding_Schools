import React, { useState } from 'react'

// function products({naam, age, data}) {
//   return (
//     <>
//     <div className='text-white'>
//     {/* <div className='w-44 h-32 rounded-3xl bg-yellow-300 mt-6 p-4 text-white'> */}

//     {/* </div> */}
//     {/* HEllo Products !! */}
//     {/* <h1>{naam} + {age} + ek data bhi dekh lo + {data.age} + {data.name}</h1> */}
//       </div>
//     </>
//   )
// }

// export default products



function products() {
    var [c, d] = useState(false)
  return (
    <div>
      <div className='text-white w-full h-60 bg-zinc-600'>
        <h4 className={`${c === false ? "text-red-600" : "text-blue-500"}`}>{c === false ? "hello" : "hey"}</h4>
        <button onClick={() => d(!c)}>Change</button>
      </div>

    </div>
  )
}

export default products
