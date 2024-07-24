import React, { useState } from 'react'
import google from "../assets/google.png"
// import taskimg from "../assets/taskimg.png"
import {useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../Config/firebaseConfig'



function Signin() {

  const [redirect,setRedirect] =useState(false)
  const navigate = useNavigate()


    const handleClick = () => {

      signInWithPopup(auth , provider).then(()=>{
        setRedirect(true)
      })

    }



  return (
    <div className='signcontent'>
        <div className='signdiv'>
            <h1>Sign-In</h1>
            {/* <img src={taskimg} width='400px' alt="" /> */}
            <button onClick={handleClick} >
                <img src= {google} alt="" className='google' />
                Continue with Google
            </button>
        </div>
        {redirect?navigate("/dashboard"):console.log("error")}
    </div>
  )
}

export default Signin