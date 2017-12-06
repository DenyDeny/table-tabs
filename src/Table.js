import React, { Component } from 'react';

import axios from 'axios';

import { CompaniesRow } from './CompaniesRow.js';
import { TenderRow } from './TenderRow';
import CompaniesHeader from './CompaniesHeader';
import TendersHeader from './TendersHeader';

import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      tenders: [],
      firstTabActive: true,
      query: ''
    };

    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  getCompanies() {
    let that = this;
    axios.get('https://raw.githubusercontent.com/avallakh/InitGroupTST/master/Table2.json')
        .then(function(data) {
        that.setState({companies: data.data.companies});
    });
  }

  getTenders() {
    let that = this;
    axios.get('https://raw.githubusercontent.com/avallakh/InitGroupTST/master/Table1.json')
        .then(function(data) {
        that.setState({tenders: data.data.tenders});
    });
  }

  componentWillMount() {
      this.getCompanies();
      this.getTenders();
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key, type) {
    let arrayCopy = [...this.state[type]];
    arrayCopy.sort(this.compareBy(key));
    this.setState({[type]: arrayCopy});
  }

  update(e) {
    let query = e.target.value;
    this.setState({query: query});
  }

  filter(type) {
    let filtered = this.state[type].filter(
      (elem) => {
        if (type == 'companies') {
          var full = elem.name.toLowerCase() + elem.inn + elem.kpp
          return full.indexOf(
            this.state.query.toLowerCase()) !== -1;
        } else {
          var full = elem.name.toLowerCase() + elem.price + elem.phase 
          + elem.publicationdate + elem.pregionName + elem.subcategory;
          return full.indexOf(
            this.state.query.toLowerCase()) !== -1;
        }
      }
    );

    return filtered;
  }
  
  render(props) {
    let firstTabActive = this.state.firstTabActive;

    const rowsCompanies = this.filter('companies').map( (rowData) => <CompaniesRow key={rowData.id} {...rowData} />)
    const rowsTenders = this.filter('tenders').map( (rowData) => <TenderRow key={rowData.Id} {...rowData} />)

    return (
      <div className="table">
        <div className="tabs">
            <button
              className={this.state.firstTabActive ? 'btn active' : 'btn'} 
              onClick={() => this.setState({firstTabActive: true})}
            >
              Companies
            </button>
            <button 
              className={this.state.firstTabActive ? 'btn' : 'btn active'}  
              onClick={() => this.setState({firstTabActive: false})}
            >
              Tenders
            </button>
            <label>Search: <input 
              onChange={this.update.bind(this)} 
              type="search"/>
            </label>
        </div>
          {firstTabActive && <CompaniesHeader sortBy={this.sortBy.bind(this)}/>}
          {!firstTabActive && <TendersHeader sortBy={this.sortBy.bind(this)}/>}
        <div className="body">
          {firstTabActive && rowsCompanies}
          {!firstTabActive && rowsTenders}
        </div>
      </div>
    );
  }
}

export default Table;
