import React from 'react';
import useInputField from '../hooks/useInputField';

const HooksForm = () => {
    const [name, nameOnchange] =useInputField('')
    const [email, emailOnchange] =useInputField('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('submitted' ,name ,email);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
              <input type="text" defaultValue={name} onChange={nameOnchange}/> <br />
              <input type="email" defaultValue={email} onChange={emailOnchange}/> <br />
              <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HooksForm;