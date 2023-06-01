const url = 'http://localhost:3001/api/v1/user/login';

// use TOKEN to get the data
const getData = async (user) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(user),
  })

  const data = response.json()
  console.log(data); // same response of connectUser 
}



// login the user whit email and password to get TOKEN
const connectUser = async (user) => {
  try {
    const resUserData = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const userData = await resUserData.json();

    if (resUserData.ok) {
      localStorage.setItem('token', userData.body.token)
      getData(user)
      return userData;
    } else {
      throw new Error('Error: ' + userData.message);
    }
  } catch (err) {
    console.error(err);
  }
};




export default connectUser;
