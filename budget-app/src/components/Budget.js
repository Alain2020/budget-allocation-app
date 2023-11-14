// src/components/Budget.js
import React from 'react';
import '../App.css';  // Update the import path

const Budget = () => {
  const budgetDetails = {
    budget: 2000,
    remaining: 1040,
    spent: 960,
    currency: '£',
  };

  return (
    <div className="container">
      <div className="budget-container">
        <h1>Company's Budget Allocation</h1>
      </div>
      <div className="budget-details-table">
        <table>
          <thead>
            <tr>
              <th className="budget-box budget-budget">
                <p>Budget</p>
                <span>{budgetDetails.currency}{budgetDetails.budget}</span>
              </th>
              <th className="budget-box budget-remaining">
                <p>Remaining</p>
                <span>{budgetDetails.currency}{budgetDetails.remaining}</span>
              </th>
              <th className="budget-box budget-spent">
                <p>Spent so far</p>
                <span>{budgetDetails.currency}{budgetDetails.spent}</span>
              </th>
              <th className="budget-box budget-currency">
                <p>Currency</p>
                <select>
                  <option value="£">£ Pound</option>
                  <option value="$">$ Dollar</option>
                  <option value="€">€ Euro</option>
                  <option value="₹">₹ Rupee</option>
                </select>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Budget;
