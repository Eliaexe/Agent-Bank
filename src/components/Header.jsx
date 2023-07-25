import { useSelector, useDispatch } from 'react-redux';
import { saveToken } from '../store/actions';
import { Link } from 'react-router-dom';

export default function Header() {
  const token = useSelector((state) => state.token);
  const isLoggedIn = token.token;
  const dispatch = useDispatch();

  const handleLog = (e) => {
    e.preventDefault();

    if (isLoggedIn) {
        dispatch(saveToken(null));
    } 
    window.location.href = 'http://localhost:3000/login'

  };

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
          <Link to="/login" className="main-nav-item" onClick={handleLog}>
            <i className="fa fa-user-circle"></i>
            {isLoggedIn ? 'Sign Out' : 'Sign in'}
          </Link>
        </div>
      </nav>
    </header>
  );
}
