import { useSelector, useDispatch} from 'react-redux';
import { saveToken } from '../store/actions';
import { Link } from 'react-router-dom';


export default function Header() {
    const isLoggedIn = useSelector(state => state.token);
    const dispatch = useDispatch();
    
    const handleLog = () => {
        if (isLoggedIn === true) {
            dispatch(saveToken(null))
        } else {
            return
        }
    }

    return(
        <header>
            <nav className="main-nav">
                <Link to="/" className='main-nav-logo'>
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
                        {isLoggedIn ? 'Sign in' : 'Sign Out'}
                    </Link>
                </div>
            </nav>
        </header>
    )
}

