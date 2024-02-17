import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./routes/Home";
import { Entry1 } from "./routes/Entry1";
import { Entry2 } from "./routes/Entry2";
import { Entry3 } from "./routes/Entry3";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="entry">
        <Route path="1" element={<Entry1 />} />
        <Route path="2" element={<Entry2 />} />
        <Route path="3" element={<Entry3 />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
