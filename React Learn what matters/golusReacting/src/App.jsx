import React from 'react'
import Products from './products'
import { useState } from 'react'


// function App() {
//   let [counter, setCounter] = useState(12); 
//   let increment = () => {
//     setCounter + 1
//   }
//   return (
// <>
// <div className='w-full h-screen bg-zinc-900 text-white'>
// <p>A counter is here {counter}</p>
// <button onClick={()=>setCounter(counter + 1)} className='px-3 py-2 border-white bg-green-500 rounded-md text-lg'>Click</button>
// <button onClick={()=> {if (counter > 0)setCounter(counter - 1)}} className='px-3 py-2 border-white bg-green-500 rounded-md text-lg'>Click</button>
// </div>
// </>


  //  part - 2  
    // <>
    // <div className='w-full h-screen bg-zinc-700 p-4'>
    // <div className='w-44 h-32 rounded-3xl bg-cyan-600 p-4 text-white'>
    //   <h3>Hello Worldsss !</h3>
    // </div>
    // <Products />
    // </div>
    // </>
    // part-1
    // <div className='main'>
    //   <h1 id='txt-white'>Hey</h1>
    // </div>
//   )
// }

// export default App


function App() {
  var [a, b] = useState(67)
  return (
    <>
    <div className='w-full h-screen bg-zinc-900 text-white'>

      <Products naam = "value" age = "25" data = {{name:"Harsh", age : 23}}/>      
    </div>
    </>
  )
}

export default App
