import Header from "../components/Header"
import Footer from "../components/Footer"
import Account from "../components/Account"
import { useSelector } from 'react-redux';

import { useChangeNameFetch } from '../utils/ChangeName';

function checkTheValue(value, standardValue) {
  if (value === "") {
    return standardValue
  } else {
    return value
  }
}

export default function Profile() {
  const token = useSelector(state => state.token);
  const name = useSelector(state => state.name.name);
  
  const { changeNameFetch } = useChangeNameFetch();
  const handleChange = async (e) => {
    e.preventDefault()

    let inputName = checkTheValue(document.getElementById('first-name').value, name.name)
    let inputSurname = checkTheValue(document.getElementById('last-name').value, name.lastname)

    if (inputName.toLowerCase() === name.name.toLowerCase() && inputSurname.toLowerCase() === name.lastname.toLowerCase() ) {
      return
    }

    const newData = {
      "firstName": inputName,
      "lastName": inputSurname
    }

    try {
      await changeNameFetch(newData, token.token)
    } catch (err) {
      console.error("Login failed:", err);
      return
    }

  }
    return(
        <div>
            <Header />
                <main className="main bg-dark">
                  <div className="header">
                    <h1>Welcome back {name.name} {name.lastname}</h1>
                    <form className="changeName" onSubmit={handleChange}>
                    <button className="edit-button" >Edit Name</button>
                      <section>
                        <div>
                          <label htmlFor="first-name">First Name</label>
                          <input type="text" id="first-name" placeholder={name.name} required/>
                        </div>
                        <div>
                          <label htmlFor="last-name">Last Name</label>
                          <input type="text" id="last-name" placeholder={name.lastname} required/>
                        </div>
                      </section>
                    </form>
                  </div>
                    {/* <Greetings name={name.name} lastName={name.lastname}/> */}
                    <Account />
                </main>
            <Footer />
        </div>
    )
}