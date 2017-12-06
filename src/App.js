import React, { Component } from 'react';
import Table from './Table.js';

import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: []
        }
    }
    getRepos(){
        let that = this;
        axios.get('https://raw.githubusercontent.com/avallakh/InitGroupTST/master/Table2.json')
            .then(function(data) {
            that.setState({response: data.data.companies});
        });
    }

    componentWillMount() {
        this.getRepos();
    }

    render() {
        return (
            <Table response={this.state.response}/>
        )
    }

}

export default App;