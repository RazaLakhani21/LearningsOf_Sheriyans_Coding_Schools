import React from 'react'

function Background() {
  return (
    <>
    <div className="fixed z-[2] w-full h-screen">
      <div className="absolute top-[5%] w-full flex justify-center py-10 text-zinc-200">Documents</div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] text-zinc-900 font-semibold -translate-y-[50%] leading-none tracking-tighter text-[13vw]">Docs.</h1> 
      </div>
    </>
  )
}

export default Background
