import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import MoviePage from "./components/MoviePage";
import GPTSearch from "./components/GPTSearch";


const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={appStore}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Browse/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/browse/:movieId",
        element: <MoviePage/>
      },
      {
        path: "/gpt",
        element: <GPTSearch/>
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
