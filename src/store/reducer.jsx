const initialTokenState = {
  token: null
};

export const tokenReducer = (state = initialTokenState, action) => {
  if (action.type === 'token/addToken') {
    return {
      ...state,
      token: action.payload
    };
  } else {
    return state;
  }
};

// nameReducer
const initialNameState = {
  name: null,
  lastname: null
};

export const nameReducer = (state = initialNameState, action) => {
  if (action.type === 'name/addName') {
    return {
      ...state,
      name: action.payload.name,
      lastname: action.payload.lastName
    };
  } else {
    return state;
  }
};



  
