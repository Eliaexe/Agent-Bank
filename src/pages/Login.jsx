// import { useState, useEffect } from "react";

import Header from "../components/Header"
import Footer from "../components/Footer"
import useTokenFetch from '../utils/Fetch';

export default function Login() {
  const { tokenFetch } = useTokenFetch();
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault();
        
      const user = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      };
  
      try {
        await tokenFetch(user);
      } catch (err) {
        console.error("Login failed:", err);
      }
    };
  return(
      <div className="full-screen">
          <Header />

          <main className="main bg-dark">
              <section className="sign-in-content">
                  <i className="fa fa-user-circle sign-in-icon"></i>
                  <h1>Sign In</h1>
                  <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label for="username">Username</label
                        ><input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label
                        ><input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label for="remember-me"
                        >Remember me</label
                        >
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    <button id="submit" className="sign-in-button">Sign In</button> 
                  </form>
              </section>
          </main>
          <Footer />
          
      </div>
    )
}

