import React from "react";
import AdminRoute from "./router/admin";
import { Routes, Route } from "react-router-dom";
import AuthRoute from "./router/auth";

const App = () => {
    return (
        <Routes>
            <Route path="/*" element={<AdminRoute />} />
            <Route path="/auth/*" element={<AuthRoute />} />
        </Routes>
    );
};

export default App;
