import React from 'react';

export const TenderRow = ({name, price, phase, publicationdate, regionName, subcategory}) => (
    <div className="row">
      <div>{name}</div>
      <div>{price}</div>
      <div>{phase}</div>
      <div>{publicationdate}</div> 
      <div>{regionName}</div> 
      <div>{subcategory}</div> 
    </div>
);

export default TenderRow;