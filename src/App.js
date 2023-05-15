import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import MainLanding from "./pages/MainLanding";
import DetailMovie from "./pages/DetailMovie";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainLanding />} />
          <Route exact path="/detail-movie" element={<DetailMovie />} />
          <Route path="*" element={<MainLanding />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
