const urlProfile = 'http://localhost:3001/api/v1/user/profile';

export const userDataFetch = async (token) => {
  try {
    const response = await fetch(urlProfile, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      return data.body;
    } else {
      throw new Error('Error: ' + data.message);
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error: ' + error.message);
  }
};

export default userDataFetch;
