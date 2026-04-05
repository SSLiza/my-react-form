import React from 'react';

const SimpleForm = () => {

  const handleSubmit = (e) => {
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    e.preventDefault()
  }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="text" name='email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;