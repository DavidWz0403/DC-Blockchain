import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom';
import axios from 'axios';

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


    authentication = async () => {

        // get users from the api
        try {
            const response = await axios.get(`http://localhost:4000/users`);
            const user = response.data;
            console.log(user);
            user.map(user => {
                if (user.publicKey === this.state.pubInput &&
                    user.privateKey === this.state.privInput) {
                    console.log('it works');
                    return <Link to="/account" />
                }
            })
        } catch (err) {
            console.log('Error: ' + err)
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