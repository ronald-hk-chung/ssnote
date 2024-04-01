import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css"

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/:folder?/:file?" element={<App />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
