import React, { useContext } from 'react';
import './AllocationList.css';
import { BudgetContext } from '../context/BudgetContext';
import AllocationTable from './AllocationTable';
import ChangeAllocation from './ChangeAllocation';

const AllocationList = () => {
  const { budget, remainingBudget, spentSoFar } = useContext(BudgetContext);

  return (
    <div className="allocation-list-container">
      <h2>Company's Budget Allocation</h2>
      <div className="budget-info">
        <p>Budget: £{budget}</p>
        <p>Remaining: £{remainingBudget}</p>
        <p>Spent so far: £{spentSoFar}</p>
        <p>Currency (£ Pound)▾</p>
      </div>

      <AllocationTable />

      <ChangeAllocation />
    </div>
  );
};

export default AllocationList;
