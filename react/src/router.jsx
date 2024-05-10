import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Kpis from "./views/kpis";
import App from "./App";
import Goals from "./views/Goals";
import Surveys from "./views/Surveys";
import Historys from "./views/Historys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/kpis',
                element: <Kpis />
            },
            {
                path: '/goals',
                element: <Goals />
            },

            {
                path: '/surveys',
                element: <Surveys />
            },
            {
                path: '/historys',
                element: <Historys />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },


    {
        path: '*',
        element: <NotFound />
    },
])

export default router;
