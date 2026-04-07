import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './familyatree.css'

export const AssetContext =createContext('')
export const MoneyContext =createContext(0)

const FamilyTree = () => {

    const[money,setMoney]= useState(0)

    const asset ='diamond';
    const Newasset ='gold';

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family money: {money}</h4>
            <MoneyContext value={[money,setMoney]}>
                <AssetContext.Provider value={Newasset}>
                <Grandpa asset={asset}/>
            </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;

/**
 * 1.
 */