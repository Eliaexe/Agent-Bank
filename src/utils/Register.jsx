const urlRegistration = 'http://localhost:3001/api/v1/user/signup';

export const registerFetch = async (user) => {
  try {
    const resUserData = await fetch(urlRegistration, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const userData = await resUserData.json();
    if (resUserData.ok) {
      console.log(userData);
    } else {
      throw new Error('Error: ' + userData.message);
    }
  } catch (err) {
    console.error(err);
  }
};

export default registerFetch;