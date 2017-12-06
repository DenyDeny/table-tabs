import React from 'react';

const CompaniesHeader = (props) => (
    <div className="header">
        <div onClick={() => props.sortBy('name', 'companies')}>Name</div>
        <div onClick={() => props.sortBy('inn', 'companies')}>inn</div>
        <div onClick={() => props.sortBy('kpp', 'companies')}>kpp</div>
    </div>
);

export default CompaniesHeader;