import React, { useState } from 'react';
import './AllocationRow.css';

const AllocationRow = ({ department, budget }) => {
  const [allocatedBudget, setAllocatedBudget] = useState(budget);

  const handleIncrease = () => {
    setAllocatedBudget(allocatedBudget + 10);
  };

  const handleDecrease = () => {
    setAllocatedBudget(allocatedBudget - 1);
  };

  return (
    <tr key={department}>
      <td>{department}</td>
      <td>£{allocatedBudget}</td>
      <td>
        <button onClick={handleIncrease}>+</button>
      </td>
      <td>
        <button onClick={handleDecrease}>-</button>
      </td>
    </tr>
  );
};

export default AllocationRow;
