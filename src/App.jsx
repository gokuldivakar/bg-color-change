
import { useState } from 'react'
import './App.css'

function App() {
  const[changer,setcolor]=useState('')
  

  return (
    <>
     <div className='d-flex justify-content-center align-items-center wrap' style={{height:'100vh',backgroundColor:changer,width:"100%"}}>
    
    <button onClick={()=>setcolor('red')} className='bg-danger m-2'>Red</button>
    <button onClick={()=>setcolor('green')} className='bg-success m-2'>Green</button>
    <button onClick={()=>setcolor('blue')} className='bg-primary m-2'>Blue</button>
   </div>
    </>
  )
}

export default App
