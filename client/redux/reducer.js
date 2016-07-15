const initialState = {
  data: [],
  loginSwitch: "Hidden" //Hidden or Login or Register
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

    default:
      return state;
  }
};

export default reducer;
