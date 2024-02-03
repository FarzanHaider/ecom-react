import React from 'react'
import Nav from './Nav'
import Card from './Card1'

function Home() {
  return (
    <>
    <div>
      <Nav />

<div className='flex'>
<Card name= "bag" price = "$20"  image = "/images/bag.jpg"/>
<Card  name="chair" price = "$30" image = "images/ecom.jpg"/>
<Card  name="oven" price = "$50" image = "images/ecom.jpg"/>
<Card name="bag" price = "$40" image = "images/oven.jpg"/>
</div>


    </div>
    </>
  )
}

export default Home
