import React, { useState } from 'react';
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); // stops refresh
        // Login stuffs

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                 // Redirect to homepage after logged in
                 history.push("/");
            })
            .catch((e) => alert(e.message));
    };

    const register = event => {
        event.preventDefault(); // stops refresh
        // Register stuffs

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // Redirect to homepage after creating user and logged in
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/" className="login__link">
            <p className="login__logo">VehicleBuy</p>
            </Link>

            <div className="login__container"> 
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
            </form>

            <p>By signing in, you agree to VehicleBuy's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice</p>
            <button onClick={register} className="login__registerButton">Create your VehicleBuy Account</button>
            </div>
        </div>
    )
}

export default Login;