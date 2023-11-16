import React, { useContext, useState } from 'react';
import './AllocationList.css';
import { BudgetContext } from '../context/BudgetContext';
import AllocationTable from './AllocationTable';
import ChangeAllocation from './ChangeAllocation';

const AllocationList = () => {
  const { budget, remainingBudget, spentSoFar } = useContext(BudgetContext);
  const [selectedCurrency, setSelectedCurrency] = useState('£ Pound');
  const currencies = ['£ Pound', '$ Dollars', '€ Euros', '₹ Rupee'];

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="allocation-list-container">
      <h2>Company's Budget Allocation</h2>
      <div className="budget-info-container">
        <div className="budget-info-box">
          <span className="budget-info-label">Budget:</span>
          <span className="budget-info-value">£{budget}</span>
        </div>
        <div className="budget-info-box">
          <span className="budget-info-label">Remaining:</span>
          <span className="budget-info-value">£{remainingBudget}</span>
        </div>
        <div className="budget-info-box">
          <span className="budget-info-label">Spent so far:</span>
          <span className="budget-info-value">£{spentSoFar}</span>
        </div>
        <div className="budget-info-box">
          <span className="budget-info-label">Currency</span>
          <div className="currency-dropdown">
            <select
              value={selectedCurrency}
              onChange={(e) => handleCurrencyChange(e.target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <AllocationTable />

      <ChangeAllocation />
    </div>
  );
};

export default AllocationList;
