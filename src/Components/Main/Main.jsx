import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-regular-svg-icons'

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
        <span className="or">Or</span>
        <hr />
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Main
