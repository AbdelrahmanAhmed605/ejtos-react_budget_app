import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    // new state with initial value of current budget
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }
    return (
<div className='alert alert-secondary'>
<span style={{ paddingRight: '0.75rem' }}>Budget: £{budget}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;