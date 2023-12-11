import React from "react";
import { ComList } from "./FSidebar/ComList";
import { ComDetails } from "./SSidebar/ComDetails";
import { Routes, Route } from "react-router-dom";

export function Main() {
  return (
    <div>
      <Routes>
        <Route path="/company/:companyId" element={<ComDetails />} />
        <Route path="/" element={<ComList />} />
      </Routes>
    </div>
  );
}
