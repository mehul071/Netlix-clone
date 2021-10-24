import React from 'react'
import './SignInScreen.css'

function SingInScreen() {
    const register = (e)=>{
        e.preventDefault();
    }
    const signUp = (e)=>{
        e.preventDefault();
    }
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <button type="submit" onClick={signUp}>Sign In</button>
                <h4> 
                    <span className='signupScreen_gray'>New to Netflix? </span>
                    <span className="signupScreen_link" onClick={register}>Sign Up now.</span></h4>
                    
            </form>
        </div>
    )
}

export default SingInScreen
