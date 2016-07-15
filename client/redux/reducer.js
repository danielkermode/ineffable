const initialState = {
  data: [],
  loginSwitch: "Hidden", //Hidden or Login or Register
  err: null,
  userId: -1,
  user: {}
};

export const ADD_DATA = 'ADD_DATA';
export const addData = (data) => {
  return {
    data,
    type: ADD_DATA
  };
};

export const CHANGE_LOGIN_SWITCH = 'CHANGE_LOGIN_SWITCH';
export const changeLoginSwitch = (switchString) => {
  return {
    switchString,
    type: CHANGE_LOGIN_SWITCH
  };
};

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR'
export const createUser = (userObj) => {
  return (dispatch) => {
    console.log(userObj)
    fetch('/api/users', {
      method: "POST",
      body: userObj
    })
      .then((res)=>{
        console.log('post post', res)
        return fetch('/api/users/' + res.body.id);
      })
      .then((userData) => {
        console.log(userData, 'is', typeof userData)
        return dispatch({
          type: CREATE_USER_SUCCESS,
          data: userData
        })
      })
      .catch((err)=>{
        console.error(err)
      })
  }
}

/* reducer */
const reducer = (state = initialState, action) => {
  let newData = state.data.slice();
  switch (action.type) {
    case ADD_DATA:
      newData.push(action.data);
      return {
        ...state,
        data: newData
      };
    case CHANGE_LOGIN_SWITCH:
      console.log('reducer...', action.switchString)
      return {
        ...state,
        loginSwitch: action.switchString
      };
    case CREATE_USER_SUCCESS:
      console.log('user seucess')
      return {
        ...state
      };
    case CREATE_USER_ERROR:
      console.log('user error')
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
