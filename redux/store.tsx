import { createStore } from 'redux';

const initialState = {
  data:{},
  test:'123',
  number:0
}; 

const changeState = (state = initialState, { type, ...rest }: any) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest };
    default:
      return state;
  }
};

const store = createStore(changeState);
export default store;
