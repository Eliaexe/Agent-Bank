import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Header() {
  const token = useSelector((state) => state.token);
  const name = useSelector((state) => state.name.name)
  const isLoggedIn = token.token;

  const handleLog = (e) => {
    e.preventDefault();

    if (isLoggedIn) {
      localStorage.clear()
    } 
    window.location.href = 'http://localhost:3000/login'

  };

  const profileTag = () => {
    return(
      <Link to="/profile">
        <img src="./img/profile-logo.jpeg" className='profile-logo' alt="profile logo" />
        <h4>{name.name} {name.lastname}</h4>
      </Link>
    )
  }

  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isLoggedIn ? profileTag() : ''}
          <Link to="/login" className="main-nav-item" onClick={handleLog}>
            <img src={isLoggedIn ? './img/logout.jpeg' : './img/login-logo.png'} alt={isLoggedIn ? 'logout logo' : 'login logo'} />
            {isLoggedIn ? 'Sign Out' : 'Sign in'}
          </Link>
        </div>
      </nav>
    </header>
  );
}
