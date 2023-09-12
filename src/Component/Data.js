import React, { useState } from 'react'

const Data = () => {

    const [data,setData] = useState(0);
  return (
    <>
    <h1>High Order Component</h1>
    <h2> Count : {data}</h2>
    <button onClick={()=>setData(data+1)}>Increase</button>
    <button onClick={()=>setData(data-1)}>Decrease</button>
    
    </>
  )
}

export default Data