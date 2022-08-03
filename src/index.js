import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./Invoices";
import Expenses from "./Expenses";
import Invoice from "./Invoice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoices" element={<Invoices />}>
          <Route path=":id" element={<Invoice />} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
