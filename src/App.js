import logo from './logo.svg';
import './App.css';

import InputForm from "./component/input_form/Main";
import ShowProduct from "./component/show_added_product/Main"
import { useState } from 'react';

let i=0;
function App() {
const [data,setData]=useState([])
console.log("app started",i++)
// const [category_food,setCategory_food]=useState([])
// const [category_electonic,setCategory_ele]=useState([])

const added_data_record=[]
  const inputForm_data_handler=(data)=>{
    setData(predata=>{return [...predata,data]})
    console.log(data,"data")
  }
const Filer_data=(filter_category)=>{
//  console.log(filter_category,"param");
 const fdata=data.filter((element)=>{return element.category==filter_category})
 console.log(fdata,data)
 return fdata;
  }

//  console.log(  Filer_data("food"),i)
  return (
<div>

<InputForm getData={inputForm_data_handler}/>

 <div><h3>Electronics</h3></div>
 <div className="item_show_div">
{Filer_data("electronics").map(e=>  <ShowProduct item_name={e.name} category={e.category} price={e.price}/>)}
</div>

 <div><h3>Food</h3></div>
 <div className="item_show_div">
 {Filer_data("food").map(e=> <ShowProduct item_name={e.name} category={e.category} price={e.price}/>)}
 </div>

 <div><h3>Skincare</h3></div>
 <div className="item_show_div">
 {Filer_data("skincare").map(e=> <ShowProduct item_name={e.name} category={e.category} price={e.price}/>)}
 </div>
 


</div>

  );
}

export default App;
