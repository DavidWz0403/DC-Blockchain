import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'



class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            balance: 100,
            toAdressInput: "",
            amount: 0,
            fromAdressInput: "",//should be fetched from API
            variant: "success",
            transaction: [],
            showSuccess: false,
            text: ""
        }
    }

    setAddressInput = (e) => {
        const toAdress = e.target.value;
        this.setState({
            toAdressInput: toAdress
        })
    }

    setAmountInput = (e) => {
        const amountInput = e.target.value;
        this.setState({
            amount: amountInput
        })
    }

    signTransaction = () => {
        //validation process with API Call if the wallet address is in our database
        const newBalance = this.state.balance

        this.setState({
            balance: newBalance - this.state.amount
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
                        <Form.Control value={this.state.fromAdress}
                            placeholder={this.state.fromAdress} type="text" required />
                        <Form.Text className="text-muted">
                            Thos is your wallet address <strong>You cannot change it, because you can only spend your own coins</strong>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="textarea">
                        <Form.Label>To address<span>*</span></Form.Label>
                        <Form.Control value={this.state.addressInput} onChange={this.setAddressInput} required />
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