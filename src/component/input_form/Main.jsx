import React, { useState } from 'react'

function Main(props) {
const [name,setName]=useState("")
const [price,setPrice]=useState("")
const [category,setCategory]=useState("")
// note- if you not use "" in useState() then gives warning of uncontrlled component
const submitHanler=(e)=>{
e.preventDefault();
props.getData({name,price,category})
}
  return (
    <div>
        <form onSubmit={submitHanler}>
           
      <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Item-Name' value={name} />
<input type="Number" onChange={(e)=>{setPrice(e.target.value)}} placeholder='price' value={price}/>
 
   <select  onChange={(e)=>{setCategory(e.target.value)}}>
<option  value="electronics" >Electonic</option>
<option value="food" >food</option>
<option value="skincare">skincare</option>    
   </select>
<button>Add.</button>
        </form>



    </div>
  )
}

export default Main