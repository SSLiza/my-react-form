import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const[error,setError]= useState('');
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('submitted');
        const name= e.target.name.value
        const price= e.target.price.value
        const quantity= e.target.quantity.value
        // console.log(name ,price,quantity);

        // validation
        
        if(name.length===0){
            setError('please provide a name')
            return
        }
        else if(price.length===0)
        {
                 setError('provide the price')
                 return
        }else if(ProductForm.price<0){
            setError('price cannot be negative')
            return
        }else{
            setError('')
        }


        const newProduct ={
            name,
            price,
            quantity
        }
        // console.log(newProduct);
            handleAddProduct(newProduct)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add a Product</h3>
                <input type="text" name='name' placeholder='Product Name'/> <br />
                <input type="text" name='price' placeholder='Product Price'/> <br />
                <input type="text" name='quantity' placeholder='Product quantity'/> <br />
                 <input type="submit" value="Submit" />
            </form>
            <p><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;