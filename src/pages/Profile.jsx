import Header from "../components/Header"
import Footer from "../components/Footer"
import Greetings from "../components/Greetings"
import Account from "../components/Account"

export default function Profile() {
    return(
        <div>
            <Header />
                <main className="main bg-dark">
                    <Greetings />
                    <Account />
                </main>
            <h1>Profile</h1>
            <Footer />
        </div>
    )
}