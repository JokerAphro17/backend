// renderRoutes

import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HANDLER_STORAGE from "../data";
import AdminLayout from "../layouts/admin";
import BlankLayout from "../layouts/blank";
import ClientLayout from "../layouts/client";
import WebsiteLayout from "../layouts/website";
import Render from "./components/Render";

export const renderRoutes = (routes) => {
    return (
        <Routes>
            {routes.map((route, index) => {
                const { path, component, permissions, layout, guard } = route;
                const Guard = guard || Fragment;

                return (
                    <Route
                        key={index}
                        path={path}
                        element={
                            <Guard>
                                <Render
                                    roles={permissions ?? []}
                                    layout={layout}
                                    page={component}
                                />
                            </Guard>
                        }
                    />
                );
            })}
        </Routes>
    );
};
