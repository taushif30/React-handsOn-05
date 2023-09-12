import React from 'react'

const HighOrderCompo = (props) => {
  return (
    <>
    <h1 style={{background:'pink', width:'700px'}}>{<props.value/>}</h1>
    
    </>
  )
}

export default HighOrderCompo