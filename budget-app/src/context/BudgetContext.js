import React, { createContext, useReducer } from 'react';

const BudgetContext = createContext();

const initialState = {
  budget: 2000,
  remainingBudget: 1040,
  spentSoFar: 960,
};

const budgetReducer = (state, action) => {
  switch (action.type) {
    // Add any budget-related actions here
    default:
      return state;
  }
};

const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
