import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data ,setdata]=useState("ram")
  function countupdate(){
    setCount(count+1)
  }
  function update(){
    setdata("seeta")
  }
  useEffect ( ()=>{
    console.log('components')
  },[count])
  return (
   <>
   <h1>hello {count}times</h1>
   <button onClick={countupdate}>click</button>
   <button onClick={update}>update</button>
   </>
  );
}
export default App;
