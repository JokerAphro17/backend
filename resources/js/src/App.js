import React from "react";
import AdminRoute from "./router/admin";
import { Routes, Route } from "react-router-dom";
import AuthRoute from "./router/auth";
import AuthGuard from "./helpers/authguard";

import { AuthContext } from "./utilities/context/authContext";

const App = () => {
    return (
        <Routes>
            <Route path="/*" element={ 
                <AdminRoute />
            } />
            <Route path="/auth/*" element={<AuthRoute />} />
        </Routes>
    );
};

export default App;
