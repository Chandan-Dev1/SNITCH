import { createBrowserRouter } from 'react-router-dom'
import Register from '../features/auth/pages/Register.jsx'
import Login from '../features/auth/pages/Login.jsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>This is a home page</h1>
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path: "*",
        element: <h1>404 - Page Not Found</h1>
    }
])