import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Project from "./components/Project/Project.jsx";
import Blog from "./components/Blog/Blog.jsx";
import { SnackbarProvider } from "notistack";

import { store } from "./app/store";
import { Provider } from "react-redux";
import Achievement from "./components/Achievement/Achievement.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Projects" element={<Project />} />
      <Route path="/achievements" element={<Achievement />} />
      <Route path="/blog" element={<Blog />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>
);
