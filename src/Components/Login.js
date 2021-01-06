import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom';

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
        const userData = this.props.userData;
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

        // this.props.userData.forEach(userData => {
        //     userData.user.forEach(user => {
        //         if (user.publicKey === this.state.pubInput &&
        //             user.privateKey === this.state.privInput) {
        //             this.setState({
        //                 showSuccess: true,
        //                 text: 'Successful login',
        //             })
        //         }
        //     })
        // })
        // recipes.forEach(recipe => {
        //     recipe.ingredients.forEach(ingredient => {
        //         if (ingredient.name == searchTerm) {
        //             resultingRecipes.push(recipe)
        //         }
        //     })
        // })
        // if (this.state.pubInput === this.props.pubKey &&
        //     this.state.privInput === this.props.privKey) {
        //     this.setState({
        //         showSuccess: true,
        //         text: 'Successful login',
        //     })
        // } else {
        //     this.setState({
        //         showSuccess: true,
        //         variant: "warning",
        //         text: 'wrong key'
        //     })
        // }


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
                    <Button onClick={this.authentication}><Link to="/account" >Log in</Link></Button>
                </Form>
            </div>
        )
    }
}

export default Login