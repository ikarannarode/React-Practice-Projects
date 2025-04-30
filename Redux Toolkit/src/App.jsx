import React,{useState,useRef,useEffect,useMemo} from 'react'

const App = () => {
  const [value,setValue]=useState(0)
  const [count,setCount]=useState(0)
  function calculateCube(num){
    console.log('Calculation Done');
    return Math.pow(num,3);
  }
  const result=useMemo(()=>calculateCube(value),[value]);
  return (
    <div>
     <input type="number"  value={value} onChange={(e)=>setValue(e.target.value)}  />
     <h1>The Cube of the number is: {result}</h1>
     <button onClick={()=>setCount(count+1)}>Counter++</button>
     <h2>Count:{count}</h2>
    </div>
  )
}

export default App