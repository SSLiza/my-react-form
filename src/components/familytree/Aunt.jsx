import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {
    const [money,setMoney]=use(MoneyContext)
    const handleAddMoney=()=>{
        setMoney(money+5000)
    }
    return (
        <div>
            <h3>Aunt</h3>
            <section>
                <Cousin name='Ema'/>
                <Cousin name='Emu' asset={asset}/>
            </section>
            <button onClick={handleAddMoney}>Add 5000</button>
        </div>
    );
};

export default Aunt;