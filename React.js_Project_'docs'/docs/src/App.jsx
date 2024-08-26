import React from 'react'
import './index.css'
import Background from './Components/Background';
import Foreground from './Components/Foreground';

function App() {
  return (
    <>
    <div className="realtive w-full h-screen text-white bg-zinc-800">
     <Background />
     <Foreground />
    </div>
    </>
  )
}

export default App;