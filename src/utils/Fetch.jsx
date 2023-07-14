import { useDispatch } from 'react-redux';
import { saveToken, saveName } from '../store/actions';

const url = 'http://localhost:3001/api/v1/user/login';
// const urlProfile = 'http://localhost:3001/api/v1/user/profile';

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
        console.log(token , name, lastName);
        dispatch(saveToken(token))
        dispatch(saveName({ name: name, lastname: lastName }));
        window.location.href = 'http://localhost:3000/profile'
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

// use TOKEN to get the data
// const getData = async (token) => {
//   try {
//     const response = await fetch(urlProfile, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       }
//     })
  
//     const data = await response.json()
//     console.log(data); 
//     // need to know why is 200 but is not returning the user data
//   } catch (err) {
//     console.log(err);
//   }
// }


export default useTokenFetch;
