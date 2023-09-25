import React, { Component, useState } from 'react';
import '../App.css';
import App from '../App';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", password: ""
        };
    }
    render() {
        //risultato su console come portare i dati nella padre :index.js?
        console.log(this.state.email);
        console.log(this.state.password);
        
        const handlerSubmit = (e) =>{
            e.preventDefault();
            this.props.onSubmit("ciao");
        };
        return (
            <div className="App">
                <header className="App-header">
                    <form onSubmit={this.handlerSubmit}>
                        <label>
                            <h3>login</h3>
                            <p>email</p>
                            <input type="email" name="email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email}/>
                            <p>password</p>
                            <input type="password" name="password" onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password}/>
                            <br />
                            <input type="submit" name="conferma" value="conferma" />
                        </label>
                    </form>
                </header>
            </div>
        );
    }
}

export default Login; 