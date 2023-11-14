// src/components/AllocationList.js
import React from 'react';

const AllocationList = () => {
  return (
    <div>
      <h2>Allocation</h2>
      {/* Add allocation list here */}
      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Allocated Budget</th>
            <th>Increase by 10</th>
            <th>Decrease by 1</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through departments and display allocations */}
        </tbody>
      </table>
    </div>
  );
};

export default AllocationList;
