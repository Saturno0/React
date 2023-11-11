import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

function Temporizador() {
  const [count, setCount] = useState(10)
  const [click, setClick] = useState(true);

  useEffect( () => {
    let timer = setTimeout(()=>{
      if(click == true && count != 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
   }, [count]);

  return (
    <>
      <button onClick={() => setClick(true)}>Start count</button>
      {click == true && count !=0? (
        <>
          <h1>The count is: {count}</h1>
        </>
      ) : (
        <h1>The count has stoped</h1>
      )}
    </>
  )
}

export default Temporizador
