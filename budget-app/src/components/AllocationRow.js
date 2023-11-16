// AllocationRow.js
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

  const handleDelete = () => {
    // Handle delete logic here
    console.log(`Deleting department: ${department}`);
  };

  return (
    <tr key={department}>
      <td>{department}</td>
      <td>£{allocatedBudget}</td>
      <td>
        <button className="increase" onClick={handleIncrease}>
          <span role="img" aria-label="plus" style={{ marginRight: '5px' }}>
            ➕
          </span>
        </button>
      </td>
      <td>
        <button className="decrease" onClick={handleDecrease}>
          <span role="img" aria-label="minus" style={{ marginRight: '5px' }}>
            ➖
          </span>
        </button>
      </td>
      <td>
      <button className="delete" onClick={handleDelete}>
  <span role="img" aria-label="delete" style={{ color: 'white', marginRight: '5px' }}>
    X
  </span>
</button>
      </td>
    </tr>
  );
};

export default AllocationRow;
