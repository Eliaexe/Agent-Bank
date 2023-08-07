import Header from "../components/Header"
import Footer from "../components/Footer"
import Account from "../components/Account"
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { useChangeNameFetch } from '../utils/ChangeName';

function checkTheValue(value, standardValue) {
  if (value === "") {
    return standardValue
  } else {
    return value
  }
}

export default function Profile() {
  const token = useSelector(state => state.token.token);
  const name = useSelector(state => state.name.name);
  
  const [showForm, setShowForm] = useState(false);

  const { changeNameFetch } = useChangeNameFetch();

  const handleEditButtonClick = () => {
    setShowForm(!showForm);
  }

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
      await changeNameFetch(newData, token)
      setShowForm(!showForm);
    } catch (err) {
      console.error("Change failed:", err);
      return
    }

  }
  if (!name || !token) {
    return(
      <div className="not-allow">
        <h1>Error! You are not allow to enter!</h1>
      </div>
    )
  } else {
      return(
        <div>
          <Header />
            <main className="main bg-dark">
              <div className="header">
                <h1>Welcome back {name.name} {name.lastname}</h1>
                <form className="changeName" onSubmit={handleChange}>
                  <button className="edit-button" onClick={showForm ? handleChange : handleEditButtonClick}>Edit Name</button>
                  <section id="form" className={showForm ? '' : 'hide'}>
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
              <Account />
            </main>
          <Footer />
        </div>
      )
  }
}