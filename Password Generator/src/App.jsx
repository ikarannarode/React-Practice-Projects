import React,{useState,useCallback,useEffect,useRef} from 'react'

const App = () => {
  const [count,setcount]=useState(0)
  const [number,setNumber]=useState(false)
  const [character,setCharacter]=useState(false)
  const [password,setPassword]=useState("")
  const [copy,setCopy]=useState(false)

const passwordRef=useRef(null)

const copyPasswordToClipboard=useCallback(()=>{
passwordRef.current?.select()
navigator.clipboard.writeText(password)
setCopy(prev=>!prev)
},[password])


  const passwordGenrator=useCallback(()=>{
let pass=""
let str=
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(number) str+="0123456789";
if(character) str+="!@#$%^&*()_+=[]{}~`";

for(let i=1;i<=count;i++){
  let char=Math.floor(Math.random()*str.length+1)
  pass+=str.charAt(char);
}
setPassword(pass)
setCopy(false)

  },[number,character,count])
useEffect(()=>{
  passwordGenrator()
},[passwordGenrator,number,character])
  return (
    <div className='flex w-screen h-screen justify-center items-center bg-blue-950'>
<div className="card  shadow-md bg-blue-900 py-4 px-5 rounded-md">
  <h1 className='text-orange-500 font-extrabold text-2xl text-center mb-4'>Password Generator</h1>
  <div className="wrapper flex">  
    <input type="text" name="" id="" className='w-full border-0 outline-0 px-2 rounded-l-md bg-blue-950 text-white' value={password} readOnly ref={passwordRef}/>
    <button className="rounded-br-md rounded-r-md bg-blue-500 p-2 px-4 text-white cursor-pointer" onClick={copyPasswordToClipboard}>{copy?"copied":"copy"}</button>
    </div>
    <div className="option-wrapper mt-4">
    <input type="range" name="" id="" max="90" min="4" value={count} onChange={(e)=>setcount(e.target.value)}/>
    <label htmlFor="number"className='text-orange-500 mx-2'>Length({count})</label>
    <input type="checkbox" name="number" id="" onChange={()=>setNumber(prev=>!prev)}/>
    <label htmlFor="number"className='text-orange-500 mx-2'>Numbers</label>
    <input type="checkbox" name="character" id="" onChange={()=>setCharacter(prev=>!prev)}/>
    <label htmlFor="character" className='text-orange-500 mx-2'>Characters</label>

    </div>
  </div>

</div> 
  
  )
}

export default App