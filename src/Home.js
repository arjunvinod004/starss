import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import star from './star'
import Cart from './Cart'
import { useState } from 'react'
function Home() {

  // useEffect(()=>{
  // window.location.reload();
  // },[])


  const handlecart=()=>{

    }
 return (
    <section className='section'>
    <h2 className='section-title'>Latest Offerings</h2>
    <div className="cocktails-center">
{
star.map((item)=>(

    <article className='cocktail'>
     <div className="img-container">
        <img  src={item.image} alt="" />
     </div>
     <div className="cocktail-footer">
      
        <span>
         
          new launch
        </span>
      
      
        <h1 key={item.id}>{item.name}</h1>
       
        <p>{item.para}</p>
        <h4>{item.price}</h4>
     <Link onClick={handlecart} to={`/cart/${item.id}`} className='btn btn-primary btn-details' >Cart
     
   
    
     </Link>
     {/* <button onClick={handlecart()} className='btn btn-primary btn-details'>
     Cart
     </button> */}
     </div>

    </article>

))
}
    </div>
  </section>
  
  )
}

export default Home
