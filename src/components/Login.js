import React, { useState } from 'react';
import '../App.css';
import App from '../App';

function Login() {
const chiave="entrato";
console.log(chiave);
    if (chiave === "uscito") {
        return (

            <div className="App">
                <header className="App-header">
                    <form>
                        <label>
                            <h3>login</h3>
                            <p>email</p>
                            <input type="email" name="email" />
                            <p>password</p>
                            <input type="password" name="password" />
                            <br />
                            <input type="submit" name="conferma" value="conferma"/>
                        </label>
                    </form>
                </header>
            </div>
        );
    }
    if(chiave==="entrato"){
        <App />
    }
}

export default Login;