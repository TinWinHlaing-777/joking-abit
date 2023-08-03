import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/welcome",
        element: <Welcome/>
    }
])