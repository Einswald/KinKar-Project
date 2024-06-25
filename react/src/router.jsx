import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Kpis from "./views/Kpis";
import App from "./App";
import Goals from "./views/Goals";
import Surveys from "./views/Surveys";
import Historys from "./views/Historys";
import Admin from "./admin/Admin";
import AdminDashboard from "./admin/AdminDashboard";
import Department from "./admin/Department";
import Schedule from "./admin/Schedule";
import AdminKpis from "./admin/AdminKpis";
import Recap from "./admin/Recap";
import Register from "./views/Register";
import Profile from "./views/Profile";
import AdminGoals from "./admin/AdminGoals";
import AdminSurveys from "./admin/AdminSurveys";
import App_2 from "./App_2";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'kpis',
                element: <Kpis />
            },
            {
                path: 'goals',
                element: <Goals />
            },
            {
                path: 'surveys',
                element: <Surveys />
            },
            {
                path: 'historys',
                element: <Historys />
            },
        ]
    },

    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: 'dashboard',
                element: <AdminDashboard />
            },
            {
                path: 'department',
                element: <Department />
            },
            {
                path: 'schedules',
                element: <Schedule />
            },
            {
                path: 'adminkpis',
                element: <AdminKpis />
            },
            {
                path: 'admingoals',
                element: <AdminGoals />
            },
            {
                path: 'adminsurveys',
                element: <AdminSurveys />
            },
            {
                path: 'recap',
                element: <Recap />
            },
        ]
    },

    {
        path: '/',
        element: <App_2 />,
        children: [
            {
                path: 'login',
                element: <Login/>
            },

        ]
    },

    {
        path: '/',
        element: <Register />,
        children: [
            {
                path: 'register',
                element: <Register/>
            }
        ]
    },

    {
        path: '/',
        element: <Profile />,
        children: [
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    },

    // {
    //     path: '/',
    //     element: <GuestLayout />,
    //     children: [
    //         {
    //             path: 'login',
    //             element: <Login />
    //         },
    //         {
    //             path: 'signup',
    //             element: <Signup />
    //         },
    //     ]
    // },

    {
        path: '*',
        element: <NotFound />
    }


])

export default router;
