import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const changeCurrency =(event) => {
        console.log(event.target.value)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert'>
            <select className="custom-select" onChange={changeCurrency} style={{backgroundColor: '#61d361', color: 'white'}}>
                <option defaultValue style={{backgroundColor: '#61d361', color: 'white'}}>Currency {currency}</option>
                <option value="$" style={{backgroundColor: '#61d361', color: 'white'}}>$ Dollar</option>
                <option value="€" style={{backgroundColor: '#61d361', color: 'white'}}>€ Euro</option>
                <option value="£" style={{backgroundColor: '#61d361', color: 'white'}}>£ Pound</option>
                <option value="₹" style={{backgroundColor: '#61d361', color: 'white'}}>₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;
