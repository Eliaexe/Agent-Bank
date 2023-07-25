import { useDispatch } from 'react-redux';
import { saveName } from '../store/actions';


const urlProfile = 'http://localhost:3001/api/v1/user/profile';

export const useChangeNameFetch = () => {
  const dispatch = useDispatch();

  const changeNameFetch = async (requestData, token) => {
    try {
      const response = await fetch(urlProfile, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();

      if (response.ok) {
        dispatch(saveName({name: responseData.body.firstName, lastname: responseData.body.lastName }))
        return responseData.body;
      } else {
        throw new Error('Error: ' + responseData.message);
      }
    } catch (error) {
      console.error(error);
      throw new Error('Error: ' + error.message);
    }
  };

  return { changeNameFetch };
};

export default useChangeNameFetch;
