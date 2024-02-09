import { useCallback, useState, useEffect, useRef } from 'react'
// import "./App.css"

function App() {
  const [length, setLength] = useState(8)
  const [useNumb, setUseNumb]=useState(false)
  const [useSpChar, setUseSpChar]=useState(false)
  const [password, setPassword]=useState("")

  // Ref hook
  const passwordRef=useState(null)
  
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(useNumb==true){
      chars+="1234567890"
    }
    if(useSpChar==true){
      chars+="~!@#$%^&*()_|{}[]?/><`"
    }
    let charsLen=chars.length;
    let counter=0;
    while(counter<length){
      pass+=chars.charAt(Math.floor(Math.random() * charsLen))
      counter++;
    }
    setPassword(pass)
  },[length,useNumb,useSpChar,setPassword])

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, useNumb,useSpChar,passwordGenerator])
  

  return (
    <>
    <div className='w-screen h-screen bg-red-200 py-10'>
      <h1 className='max-w-md mx-auto px-10 text-4xl text-center text-rose-400 hover:underline hover:lowercase decoration-rose-400'>Password Generator</h1>
        <div className='max-w-lg mx-auto my-4 px-4 bg-red-100 py-4' style={{textAlign:'center'}}>
          <div className='flex shadow rounded-lg overflow-hidden m-4'>
              <input type="text" placeholder='password' value={password} readOnly ref={passwordRef} className='w-full outline-none' />
              <button className='bg-blue-400 hover:bg-blue-900 hover:text-white rounded-lg text-black px-2 py-1 octicon octicon-check js-clipboard-check-icon color-fg-success d-none' onClick={() => {copyToClipboard()}}>copy</button>
              <br />
          </div>
          <div>
            <input className='mr-2' type="range" min={8} max={99} value={length} onChange={(e)=>{setLength(e.target.value)}} />
            <label className='mr-2 hover:lowercase'>Length: {length}</label>
            <input className='mx-1' type="checkbox" defaultChecked={useNumb} onChange={()=>{setUseNumb((prev)=>!prev)}}/>
            <label className='mr-2 hover:lowercase' htmlFor="">Numbers</label>
            <input className='mx-1' type="checkbox" defaultChecked={useSpChar} onChange={()=>{setUseSpChar((prev)=>!prev)}}/>
            <label className='hover:lowercase'>Special Characters</label>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
