import React from 'react';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  message: "Działa!",
  time: new Date(),
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return { ...state, time: new Date() };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const App = () => {
  return (
    <>
      <Task01 />
      <Provider store={store}>
        <Task02 />
        <Task03 />
      </Provider>
      {/* <Task04 /> */}
      {/* <Task05 /> */}
    </>
  );
};

export default App;