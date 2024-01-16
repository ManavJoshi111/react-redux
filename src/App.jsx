import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HooksCakeContainer> </HooksCakeContainer>
        <CakeContainer />;
        <IcecreamContainer />
      </Provider>
    </>
  );
};

export default App;
