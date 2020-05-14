import * as React from "react";
import * as ReactDOM from "react-dom";
import "./scss/base.scss";
import "todomvc-app-css/index.css";
import Header from "./components/header/index.jsx";
import Main from "./components/main/index.jsx";
import { TodosProvider } from "./components/TodosProvider.jsx";
import { FilterProvider } from "./components/FilterProvider.jsx";
import Footer from "./components/footer/index.jsx";


ReactDOM.render(
  <TodosProvider>
    <Header />
    <FilterProvider>
      <Main />
      <Footer />
    </FilterProvider>
  </TodosProvider>,
  document.getElementById("root")
);
