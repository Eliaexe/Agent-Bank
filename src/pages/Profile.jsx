import Header from "../components/Header"
import Footer from "../components/Footer"
import Greetings from "../components/Greetings"
import Account from "../components/Account"
import { useSelector } from 'react-redux';
// import { useUserData } from '../utils/Fetch';
// import { connect } from "react-redux";


export default function Profile() {
    const token = useSelector(state => state.token);
    const name = useSelector(state => state.name)
    console.log(token);
    return(
        <div>
            <Header />
                <main className="main bg-dark">
                    <Greetings name={name}/>
                    <Account />
                </main>
            <h1>Profile</h1>
            <Footer />
        </div>
    )
}