import React from 'react';

const TendersHeader = (props) => (
    <div className="header">
        <div onClick={() => props.sortBy('name', 'tenders')}>Name</div>
        <div onClick={() => props.sortBy('price', 'tenders')}>price</div>
        <div onClick={() => props.sortBy('phase', 'tenders')}>phase</div>
        <div onClick={() => props.sortBy('publicationdate', 'tenders')}>publicationdate</div>
        <div onClick={() => props.sortBy('pregionName', 'tenders')}>regionName</div>
        <div onClick={() => props.sortBy('subcategory', 'tenders')}>subcategory</div>
    </div>
);

export default TendersHeader;