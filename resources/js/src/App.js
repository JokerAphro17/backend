import React, { lazy } from "react";
import {AuthProvider} from './utilities/context/authContext'
import { AppProvider } from "./utilities/context/appContext";

const App = () => {
    const LazyRoute = lazy(() => import('./router/configRoute'))

    return (
        <AppProvider>
            <AuthProvider>
                    <LazyRoute />
            </AuthProvider>
        </AppProvider>
    )
};

export default App;
