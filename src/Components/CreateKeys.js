import React, { Component } from 'react'
// import { EC } from 'elliptic';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import User from './class';
import './CreateKeys.css';
import { Link } from 'react-router-dom';
class CreateKeys extends Component {

    constructor(props) {
        super(props)
        this.state = {
            publicKey: "",
            privateKey: "",
            showButton: false,
            showAlert: false,
            variant: "warning",
            userData: [],
            id: "",

        }
        this.user = User;
    }


    generateKeys = () => {

        const EC = require('elliptic').ec;
        const ec = new EC('secp256k1');
        const key = ec.genKeyPair();
        setTimeout(() => {
            this.setState({
                publicKey: key.getPublic('hex'),
                privateKey: key.getPrivate('hex'),
            })

            this.generateUser();
        }, 100)

        console.log("privKey")
        console.log(this.state.privateKey);
        console.log("pub key")
        console.log(this.state.publicKey);

        //Post method

    }

    generateUser = () => {

        let userId = this.state.id + 1;
        const user = new User(this.state.id, this.state.publicKey,
            this.state.privateKey, this.state.transactions = []);

        const newUser = [...this.state.userData, user];
        this.setState({
            userData: newUser,
            showAlert: true,
            id: userId,
        })
        console.log(this.state.userData)
    }
    render() {

        return (
            <div className="keys">
                <Alert variant={this.state.variant} show={this.state.showAlert}>
                    Your public and private Key are unique. Make sure to store it safely.<br />
                If you are losing one of them, you will never be able to access your account again!!!.
                </Alert>
                <p>Your id: {this.state.id}</p>
                <p>Your public key: {this.state.publicKey}</p>
                <p>Your private key: {this.state.privateKey}</p>
                <Button variant="outline-info"
                    onClick={this.generateKeys}
                    disabled={this.state.showButton}>
                    Generate Wallet
                </Button>
                <Button variant="outline-info">
                    <Link to="/login" >Return to login</Link>
                </Button>
            </div>
        )
    }

}

export default CreateKeys; 