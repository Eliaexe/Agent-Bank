import Header from "../components/Header";
import Footer from "../components/Footer";
import registerFetch from '../utils/Register';


export default function Register(){

const handleRegistration = async(e) => {
    e.preventDefault();

    const user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value
      }

    try {
        await registerFetch(user)
    } catch (err) {
      console.error("Login failed:", err);
    }
}


return (
    <div className="full-screen">
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Register</h1>
          <form onSubmit={handleRegistration}>
            <div className="input-wrapper">
              <label htmlFor="firstName">Name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Surname</label>
              <input type="text" id="lastName" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button id="submit" className="sign-in-button">Register</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
