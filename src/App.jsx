import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import store from "./app/store";
import Layout from "./layout/Layout";
import CreateBook from "./pages/CreateBook";
import Home from "./pages/Home";
import UpdateBook from "./pages/UpdateBook";

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<CreateBook />} />
          <Route path="/edit/:bookId" element={<UpdateBook />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;
