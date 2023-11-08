import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const maxBudget = 20000; // Maximum value of budget

    const handleBudgetChange = (event) => {
        const newBudget = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        
        if(parseInt(newBudget) > 20000) {
            alert("Budget cannot exceed "+maxBudget);
            return;
        }
        if(parseInt(newBudget) < totalExpenses) {
            alert("You cannot reduce the budget lower than spending ");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} </span>
<input type="number" step="10" max={maxBudget} value={budget} onChange={handleBudgetChange} style={{ width: '150px' }} ></input>
</div>
    );
};
export default Budget;