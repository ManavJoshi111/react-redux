import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import IcecreamReducer from "./icecream/icecreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: IcecreamReducer,
});

export default rootReducer;
