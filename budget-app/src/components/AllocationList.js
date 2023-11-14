// src/components/AllocationList.js
import React from 'react';

const AllocationList = () => {
  const departments = [
    { name: 'Marketing', allocatedBudget: '£50' },
    { name: 'Finance', allocatedBudget: '£300' },
    { name: 'Sales', allocatedBudget: '£70' },
    { name: 'Human Resource', allocatedBudget: '£40' },
    { name: 'IT', allocatedBudget: '£500' },
  ];

  return (
    <div>
      <h2>Allocation</h2>
      <table className="allocation-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Allocated Budget</th>
            <th>Increase by 10</th>
            <th>Decrease by 1</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={index}>
              <td>{department.name}</td>
              <td>{department.allocatedBudget}</td>
              <td>+</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllocationList;
