const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE"; // this is an action

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// a reducer is in the form of (previousState, action) => newState
// below is the code which defined a reducer

// initialState to initialize the reducer function
const initialState = {
  numOfCakes: 10,
};

// the reducer function is one of the core component of redux, it accepts state and action. acc to the action, it returns the new state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      // here instead of returning state.numOfCake-=1, we are returning a new object
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// we are creating the store here, it receives an argument which is the reducer function
const store = createStore(reducer);

// these are the methods of store, getstate, subscribe, dispatch
console.log("Initial state: ", store.getState());
// whenever a state is updated the callback of subscribe method will be called, so basically subscribe attaches an eventlistener
const unsubscribe = store.subscribe(() =>
  console.log("Updated state: ", store.getState())
);

// dispatch function takes the action in the argument and calls the reducer function accordingly
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
