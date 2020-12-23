import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blocks: [],
            hash: "",
            previousHash: "",
            timestamp: new Date.now(),
            transactions: []
        }
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Dashboard;