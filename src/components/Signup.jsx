import React from 'react'

function Signup() {
  return (
    <>
    <div className='container'>
        <form>
            <h1>eShop</h1>
            <div className="signup">
                <h2>Create an eShop Account</h2>
                <input type="text" placeholder='name@company.com' />
                <input type="password" placeholder='.........'/>
                <input type="password" placeholder='.........'/>
                <p>Create an eShop account</p>
                <input className='placelink'  type="text" placeholder='Already have an account? Login here' />
            </div>
        </form>
      
    </div>
    </>
  )
}

export default Signup
