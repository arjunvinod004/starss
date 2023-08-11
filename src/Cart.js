import React, {  useState } from 'react'
import Table from 'react-bootstrap/Table';
import {FaTrash} from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import star from './star';
import './bootstrap.min.css'
import { useCart } from 'react-use-cart';




function Cart() {
 

    const [data,setData]= useState([])

    
  
  
    const products = [
      {
        id:"1",
        name:"Mocha Cookie Crumble Latte ",
        image:"	https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/104014.webp",
        para:"Our Mocha Cookie crumble Latte is a deliciously flavoured mocha indulgence - Hot coffee meets chocolate and co ",
        price:"₹ 414"
        
        
        },
        
        {
        id:"2",
        name:"Mocha Cookie Crumble Frappuccino ",
        image:"	https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/104008.webp",
        para:"A perfect blend of coffee, vanilla flavour, milk and cocoa powder. Finished with delicious chocolate whipped c ",
        price:"₹ 483"
        },
        {
        id:"3",
        name:"Iced Mocha Cookie Crumble",
        image:"	https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/104018.webp",
        para:"A mix of cocoa powder, Vanilla flavour and espresso shot served on milk and ice, topped with delicious chocola ",
        price:"₹ 446"
        }
        
        
    ];
   

    
const handlecart=(product)=>{
  setData([...data,product])
  

}

const History= useNavigate();
const handleDelete=(id)=>{
 
  alert(`Are You Sure You Want To Delete`)
  console.log(star.map((item)=>item.id).indexOf(id)); 
  let index=star.map((item)=>item.id).indexOf(id)
  console.log(index);
  star.splice(index,1)
  console.log(star);
  History('/cart')
}


// const handleDelete=()=>{

// }
 
  return (

<div>
<h1 className='text-center mt-5'>cart</h1>
   <Table striped bordered hover  style={{margin:'60px',border:'2px solid'}}>
  <thead>
    <tr>
      <th> id</th>
      <th>user name</th>
      <th>image</th>
      <th>phone number</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
 {
 
products.map((product)=>(
<tr key={product.id}>
 
  <td>{product.id}</td>
  <td>{product.name}</td>
  <td><img style={{height:'200px'}} src={product.image}/></td>
  <td>{product.para}</td>
  <td>{product.price}</td>
  
  <td>
   
     <Button onClick={()=>handleDelete(product.id)} style={{marginLeft:'20px'}} className='btn btn-danger'><FaTrash/></Button> 
   
   </td>
</tr>
))

 }


  </tbody>
</Table>
</div>
  
    
  )
}

export default Cart
