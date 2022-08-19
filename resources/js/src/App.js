import React from "react";
import routes from "./routers/routes";

// import { AuthContext } from "./utilities/context/authContext";
import { renderRoutes } from './routers/renderRoutes';



const App = () => {
    // const auth = useContext(AuthContext);
    return (
        <>
            renderRoutes(routes)
        </>
    );
};

export default App;
