import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Application from "../pages/app";
import RegisterDaw from "../pages/authentication/register";
import Activation from "../pages/authentication/activation";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/registration",
        element: <RegisterDaw />
    },
    {
        path: "/activation/:uid/:token",
        element: <Activation />
    },
    {
        path: "/application",
        element: <Application />
    }
])

export default router