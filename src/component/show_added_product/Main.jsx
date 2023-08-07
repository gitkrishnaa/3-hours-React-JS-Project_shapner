import React, { useState } from 'react'
import "./Main.css"
function Main(props) {
const [item,setitem]=useState("show")

const deleteHandler=()=>{
    setitem("deleted_item")
}

  return (
    <div className={item}>
<span>{props.item_name} </span>
<span>{props.category}</span> 
<span>{props.price}</span>
<button onClick={deleteHandler}>Delete</button>


    </div>
  )
}

export default Main