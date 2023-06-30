import { useDispatch, useSelector } from 'react-redux';
import { saveToken } from '../store/actions';

const url = 'http://localhost:3001/api/v1/user/login';
const urlProfile = 'http://localhost:3001/api/v1/user/profile';

export const useTokenFetch = () => {
  const dispatch = useDispatch();

  const tokenFetch = async (user) => {
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
        const token = userData.body.token;
        dispatch(saveToken(token));

        const [name, dominio] = user.username.split('@');
        let delateTheName = user.username.slice(name.length + 1);
        const lastName = delateTheName.split('.')[0];
        console.log("Login successful");
        
        window.location.href = 'http://localhost:3000/profile';
      } else {
        throw new Error('Error: ' + userData.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { tokenFetch };
};


export const useUserData = () => {
  const token = useSelector(state => state.token)
  console.log(token, 'ciao');

  const getUserData = async () => {
    try {
      const response = await fetch(urlProfile, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      console.log("Token:", token);
      console.log(data.body, 'ciao');
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error: ' + error.message);
    }
  };

  return { getUserData };

}

export default useTokenFetch;
