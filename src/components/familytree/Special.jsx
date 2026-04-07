import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({asset}) => {
    const Newasset=useContext(AssetContext)
    console.log(Newasset)
    return (
        <div>
            <h3>special :{asset}</h3>
            <h3>special :{Newasset}</h3>

        </div>
    );
};

export default Special;