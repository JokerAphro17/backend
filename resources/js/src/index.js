import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./utilities/context/authContext";

const rootTag = document.getElementById("root");

if (rootTag) {
    const root = ReactDOM.createRoot(rootTag);
    root.render(
        <React.StrictMode>
            <AuthProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AuthProvider>
        </React.StrictMode>
    );
}
