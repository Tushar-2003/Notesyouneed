import React from 'react';
import './Login.css';
import Google from '../../images/google_png.png';
import FB from '../../images/fb_logo.png';
import GH from '../../images/logo_gh.png';


function Login() {
  return (
    <div className='login'>
      <h2 className='ln_title'>SignUp to create new account or Login with your creditionals</h2>
      <div className='wrapper'>
        <div className='left'>
            <div className='loginButs google'>
                <img className='imgl' src={Google} alt=" "/>
                Google
            </div>
            <div className='loginButs gh'>
                <img className='imgl' src={GH} alt=" "/>
                GitHub
            </div>
            <div className='loginButs fb'>
                <img className='imgl' src={FB} alt=" "/>
                Facebook
            </div>
        </div>
        <div className='center'>
            <div className='line' />
            <div className='or'>OR</div>
        </div>
        <div className='right'>
            <input type="text"  placeholder='Email ID'/>
            <input  type="text" placeholder='Password'/>
            <button className='submit'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login;
