import React from 'react'

function Card(props) {
  return (
    <div className='card'>
       <p>{props.name}</p>
       <span>{props.price } </span>

       <div>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
        </div> 

        
        <img  className='img' src={props.image} alt="" />
      
    </div>
  )
}

export default Card
