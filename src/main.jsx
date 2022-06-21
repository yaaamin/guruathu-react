import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { DataBrowserRouter, Route } from "react-router-dom";

import Root from "./routes/root";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataBrowserRouter>
      <Route path="/" element={<Root />} />
    </DataBrowserRouter>
  </React.StrictMode>
);
