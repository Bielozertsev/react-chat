const { createStore } = require('redux');

const increment = {
  type: 'INCREMENT',
};

const initialState = 0;

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMEMT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment);
store.dispatch(increment);
store.dispatch(increment);
