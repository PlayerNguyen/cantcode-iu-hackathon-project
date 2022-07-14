import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

// import "./Index.css";
import { Provider } from "react-redux";
import { store } from "./Store";

const root = createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
