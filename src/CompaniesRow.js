import React from 'react';

export const CompaniesRow = ({name, inn, kpp}) => (
    <div className="row">
      <div>{name}</div>
      <div>{inn}</div>
      <div>{kpp}</div> 
    </div>
);

export default CompaniesRow;