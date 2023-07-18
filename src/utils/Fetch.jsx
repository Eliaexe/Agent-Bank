import { useDispatch } from 'react-redux';
import { saveToken, saveName } from '../store/actions';

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

        const [name] = user.username.split('@');
        let delateTheName = user.username.slice(name.length + 1);
        const lastName = delateTheName.split('.')[0];
        // console.log(token , name, lastName);
        dispatch(saveToken(token));
        dispatch(saveName({ name: name, lastname: lastName }));
        // dispatch(logInOut('in'))
        window.location.href = 'http://localhost:3000/profile';
        // getData(token)
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