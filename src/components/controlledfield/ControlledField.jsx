import React, { useState } from 'react';

const ControlledField = () => {
     const handleSubmit=(e)=>{
       e.preventDefault()
       console.log('submitted');
       if(password.length< 6){
            setError('password must be 6 char or longer'); 
        }else{
            setError('')
        }
     }
     const [password,setPassword]=useState('')
     const [error,setError]=useState('')

     const handlePasswordEvent=(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value)
        if(password.length< 6){
            setError('password must be 6 char or longer'); 
        }else{
            setError('')
        }
     }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' id='' placeholder='Email' required /> <br />
                <input type="password" onChange={handlePasswordEvent} defaultValue={password} name='password' id='' placeholder='Password' required /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;