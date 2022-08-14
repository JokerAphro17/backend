import React from "react";
import AdminRoute from "./router/admin";
import { Routes, Route } from "react-router-dom";
import AuthRoute from "./router/auth";
<<<<<<< HEAD
=======
import AuthGuard from "./helpers/authguard";

import { AuthContext } from "./utilities/context/authContext";
>>>>>>> 8fa90216afe57e4c858ac287def079fc828ca644

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
