import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pubInput: "",
            privInput: "",
            showSuccess: false,
            variant: "success",
            text: ''

        }
        const publicKey = this.props.pubKey;
        const privateKey = this.props.privKey;
        const userData = this.props.userData;
    }


    setPubInput = (e) => {
        const input = e.target.value;
        this.setState({
            pubInput: input
        })
    }

    setPrivInput = (e) => {
        const input = e.target.value;
        this.setState({
            privInput: input
        })
    }


    authentication = () => {

        // this.props.userData.map(userData => {
        //     if (this.state.pubInput === this.state.userData.publicKey &&
        //         this.state.privInput === this.state.userData.privateKey) {
        //         this.setState({
        //             showSuccess: true,
        //             text: 'Successful login',
        //         })
        //     } else {
        //         this.setState({
        //             showSuccess: true,
        //             variant: "warning",
        //             text: 'wrong key'
        //         })
        //     }
        // })

        if (this.state.pubInput === this.props.pubKey &&
            this.state.privInput === this.props.privKey) {
            this.setState({
                showSuccess: true,
                text: 'Successful login',
            })
        } else {
            this.setState({
                showSuccess: true,
                variant: "warning",
                text: 'wrong key'
            })
        }


    }
    render() {
        return (
            <div>
                <Alert variant={this.state.variant} show={this.state.showSuccess}>
                    {this.state.text}
                </Alert>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Publicaddress:<span>*</span></Form.Label>
                        <Form.Control value={this.state.pubInput}
                            onChange={this.setPubInput} type="text" required />
                        <Form.Text className="text-muted">
                            The E-Mail address on which we will reply, <strong>won't be shared with any third parties!</strong>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="textarea">
                        <Form.Label>Privatekey<span>*</span></Form.Label>
                        <Form.Control value={this.state.privInput} onChange={this.setPrivInput} required />
                        <Form.Text className="text-muted">
                            Place your message here, <strong>won't be shared with any third parties!</strong>
                        </Form.Text>
                    </Form.Group>
                    <Button onClick={this.authentication}>Log in</Button>
                </Form>
            </div>
        )
    }
}

export default Login