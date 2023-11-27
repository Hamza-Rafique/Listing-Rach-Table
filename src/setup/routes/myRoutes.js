import React from "react";
import { Route, Routes } from "react-router-dom";
import MangeBusiness from "../../pages/ManageBusiness";
import CreateBusiness from "../../pages/CreateBusiness";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MangeBusiness />} />
      <Route path="/create-business" element={<CreateBusiness />} />
    </Routes>
  );
};

export default MyRoutes;
