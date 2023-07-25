import Header from "../components/Header";
import Footer from "../components/Footer";
import useTokenFetch from '../utils/Token';

import { Link } from 'react-router-dom';


export default function Login() {
  const { tokenFetch } = useTokenFetch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email: document.getElementById('username').value,
      password: document.getElementById('password').value,
    };

    try {
      await tokenFetch(user);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="full-screen">
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="newAccount">
              <Link to="/register" >Register new account</Link>
            </div>
            <button id="submit" className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
