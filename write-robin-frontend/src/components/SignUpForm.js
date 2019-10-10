import React, {Component} from 'react';

class SignUpForm extends Component{
        constructor(){
        super()
        this.state = {username: '', password: ''}
    }

    updateUsername = event => {
        this.setState({username: event.target.value})
    }

    updatePassword = event => {
        this.setState({password: event.target.value})
    }
    
    submitLogin = event => {
        event.preventDefault()
        fetch(`${this.props.backendURL}/users`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user: {
                username: this.state.username,
                password: this.state.password
                }
            }) 
        })
        .then()
    }

    render(){
        return (
            <form onSubmit={this.submitLogin}>
                <p>UserNameBar</p>
                <input type='text' value={this.state.username} onChange={this.updateUsername}></input>
                <p>PasswordBar</p>
                <input type='password' value={this.state.password} onChange={this.updatePassword}></input>
                <button type='submit'>Login</button>
            </form>
    )   }
}

export default SignUpForm;
