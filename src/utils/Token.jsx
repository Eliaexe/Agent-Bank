import { useDispatch } from 'react-redux';
import { saveToken, saveName } from '../store/actions';
import userDataFetch from "../utils/UserData";

const url = 'http://localhost:3001/api/v1/user/login';

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
        const fetchedUserData = await userDataFetch(token) 

        const {firstName, lastName} = fetchedUserData

        dispatch(saveToken(token));
        dispatch(saveName({ name: firstName, lastname: lastName }));
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

export default useTokenFetch;
