import adminRoutes from "./admin";
import clientRoutes from "./client";
import otherRoutes from "./other";
import websiteRoutes from "./website";

const appRoutes = [
    ...websiteRoutes,
    ...clientRoutes,
    ...adminRoutes,
    ...otherRoutes
]

export default appRoutes;
