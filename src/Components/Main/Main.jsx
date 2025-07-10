import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-regular-svg-icons'
import fb from '/ReactJs/Login-form/src/assets/Facebook.png'
import google from '/ReactJs/Login-form/src/assets/Google.png'

const Main = () => {
  return (
    <div className='main'>
      <div className="left">
        <h4 className='form-heading'>Welcome 👋</h4>
        <p className='p1'>Today is a new day. It's your day. You shape it. 
             Sign in to start managing your projects.</p>
        <div className="input">
            <p className='p2'>Email</p>
            <input type="text" placeholder='Example@gmail.com' />
            <p id='pass' className='p2'>Password</p>
            <input type="password" placeholder='At least 8 character'/>
        </div>
        <div className="fpass">Forget Password?</div>
        <button className='btn1'>Sign in</button>
        <div className="or">Or</div>
        <hr />
        <br />
        <button className='btn1' id='google'><img src={fb} alt="" />Sign in with Google</button>
        <button className='btn1' id='google' ><img src={google} alt="" />Sign in with Facebook</button>
        <br />
        <div className="any-acc">Don't you have an account? <a href="/">Sign up</a></div>
        <br />
        <br />
        <br />
        <div className='rights' >© 2025 ALL RIGHTS RESERVED</div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Main
