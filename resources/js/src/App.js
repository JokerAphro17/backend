import React, { lazy } from "react";
import MainLoadable from "./components/loadable";
import {AuthProvider} from './utilities/context/authContext'
import { AppProvider } from "./utilities/context/appContext";

const App = () => {
    const LazyRoute = lazy(() => import('./router/configRoute'))

    return (
        <AppProvider>
            <AuthProvider>
                <MainLoadable>
                    <LazyRoute />
                </MainLoadable>
            </AuthProvider>
        </AppProvider>
    )
};

export default App;
