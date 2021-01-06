import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Transaction from './transaction_class';


class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            balance: 100,
            toAddressInput: "",
            amount: 0,
            fromAddressInput: "",//should be fetched from API
            variant: "success",
            transactions: [],
            hash: "",
            timestamp: "",
            showSuccess: false,
            text: ""
        }
        this.transaction = Transaction;
    }

    setAddressInput = (e) => {
        const toAddress = e.target.value;
        this.setState({
            toAddressInput: toAddress
        })
    }

    setFromAddressInput = (e) => {
        const fromAddress = e.target.value;
        this.setState({
            fromAddressInput: fromAddress
        })
    }
    setAmountInput = (e) => {
        const amountInput = e.target.value;
        this.setState({
            amount: amountInput
        })
    }
    calculateHash = () => {
        const SHA256 = require('crypto-js/sha256');
        return SHA256(this.state.fromAddressInput + this.state.toAddressInput +
            this.state.amount).toString();
    }

    signTransaction = async () => {

        //validation process with API Call if the wallet address is in our database
        const newBalance = this.state.balance
        let transaction;
        transaction = new Transaction(this.state.fromAddressInput,
            this.state.toAddressInput, this.state.amount, this.calculateHash(),
            this.state.timestamp = Date.now()
        );
        const newtrans = [...this.state.transactions, transaction];
        this.setState({
            balance: newBalance - this.state.amount,
            transactions: newtrans
        }, function () {
            console.log(this.state.transactions);
        })

    }




    //ComponentDidMount to display the transaction history
    render() {
        return (
            <div>
                <h1>Your balance: {this.state.balance}</h1>
                <Alert variant={this.state.variant} show={this.state.showSuccess}>
                    {this.state.text}
                </Alert>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>From address:<span>*</span></Form.Label>
                        <Form.Control value={this.state.fromAddressInput}
                            onChange={this.setFromAddressInput} type="text" required />
                        <Form.Text className="text-muted">
                            Thos is your wallet address <strong>You cannot change it, because you can only spend your own coins</strong>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="textarea">
                        <Form.Label>To address<span>*</span></Form.Label>
                        <Form.Control value={this.state.toAddressInput} onChange={this.setAddressInput} required />
                        <Form.Text className="text-muted">
                            The wallet address where you want to send the money to, <strong>enter only valid addresses!</strong>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="textarea">
                        <Form.Label>Amount<span>*</span></Form.Label>
                        <Form.Control value={this.state.amount} onChange={this.setAmountInput} required />
                        <Form.Text className="text-muted">
                            Amount of money, you would like to send!
                        </Form.Text>
                    </Form.Group>
                    <Button onClick={this.signTransaction}>Create transaction</Button>
                </Form>
            </div>
        )


    }
}

export default Account; 