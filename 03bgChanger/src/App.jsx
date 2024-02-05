import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className="w-screen h-screen duration-200" style={{backgroundColor:color, textAlign:'center'}}>
      <h1 className='text-white border-lg-black' style={{fontSize:'60px', fontFamily:'Cursive',padding:'100px 0px 40px 0px',textShadow:'0 0 3px #412000, 0 0 5px #412000'}}>Hey there!</h1>
      <h2 className='text-white' style={{border:'2px',fontSize:'40px', fontFamily:'Lucida control',textShadow:'0 0 3px #412000, 0 0 5px #412000'}}>Color is a power which directly influences the soul. Hit the color you admire..</h2>
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0" style={{padding:'0 145px 0 145px'}}>
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={()=> setColor("blue")} className="px-4 bg-blue-600 rounded-lg text-white shadow-lg"> Blue </button>
          <button onClick={()=> setColor("purple")} className='bg-purple-600 text-white px-4 rounded-lg shadow-lg'> Purple </button>
          <button onClick={()=> setColor("green")} className='px-4 bg-green-600 rounded-lg text-white shadow-lg'>Green</button>
          <button onClick={()=> setColor("black")} className='px-4 bg-black rounded-lg text-white shadow-lg'>Black</button>
          <button onClick={()=> setColor("yellow")} className='px-4 bg-yellow-400 rounded-lg text-white shadow-lg'>Yellow</button>
          <button onClick={()=> setColor("#87CEEB")} className='px-4 bg-blue-300 rounded-lg text-white shadow-lg'>Sky Blue</button>
          <button onClick={()=> setColor("red")} className='px-4 rounded-lg text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=> setColor("white")} className='px-4 rounded-lg text-black shadow-lg'>White</button>
          <button onClick={()=> setColor("gray")} className='px-4 bg-gray-400 rounded-lg text-black shadow-lg'>Gray</button>
          <button onClick={()=> setColor("magenta")} className='px-4 rounded-lg text-white shadow-lg' style={{backgroundColor:"magenta"}}>Magenta</button>
          <button onClick={()=> setColor("pink")} className='px-4 rounded-lg text-white shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=> setColor("orange")} className='px-4 rounded-lg text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
        </div>
      </div>

    </div>
     
    </>
  )
}

export default App
