import React from 'react';
import AllocationRow from './AllocationRow';
import './AllocationTable.css';

const AllocationTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Department</th>
          <th>Allocated Budget</th>
          <th>Increase by 10</th>
          <th>Decrease by 1</th>
          <th>Delete</th> {/* Added the delete column header */}
        </tr>
      </thead>
      <tbody>
        <AllocationRow department="Marketing" budget={50} />
        <AllocationRow department="Finance" budget={300} />
        <AllocationRow department="Sales" budget={70} />
        <AllocationRow department="Human Resource" budget={40} />
        <AllocationRow department="IT" budget={500} />
      </tbody>
    </table>
  );
};

export default AllocationTable;
