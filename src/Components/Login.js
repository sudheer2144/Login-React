import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

const Login = () => {
    const [username, setUsername] = useState("")
    const [passowrd, setPassword] = useState("")

    const navigate = useNavigate()


    async function getData() {
        console.log(username, passowrd)
        let res = fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: passowrd,
            })
        })
        if ((await res).ok) {
            let data = await (await res).json();
            console.log(data)
            localStorage.setItem("user", JSON.stringify(data))
            navigate("/profile")
        }
        else {
            alert("Could'nt find account")
            return;
        }

    }

    return (
        <>
            <div className="container">
                <div id="login-container">
                    <div className="welcome">
                        <h4>Welcome back!👋</h4>
                        <h1>Sign in to your account</h1>
                    </div>
                    <div id="input-container">
                        <div id="input">
                            <label htmlFor="email">Your Email</label>
                            <input onChange={(e) => { setUsername(e.target.value) }} className="samesize" type="text" name="email" id="" />
                        </div>
                        <div id="input">
                            <label htmlFor="password">Passowrd</label>
                            <input onChange={(e) => { setPassword(e.target.value) }} className="samesize" type="password" name="password" id="" />
                        </div>
                    </div>
                    <button onClick={getData} className="center samesize">CONTINUE</button>
                    <a className="center" href="#">Forget your password?</a>
                </div>
                <p className="center">Don't have an account?<a href="#">Sign up</a></p>
            </div>
        </>
    )
}

export default Login;