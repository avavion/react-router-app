import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import ErrorPage from "../pages/ErrorPage";
import SecretPage from "../pages/SecretPage";

const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <HomePage />,
            index: true
        },
        {
            path: '/user',
            element: <UserPage />,
        },
        {
            path: '/secret',
            element: <SecretPage />
        }
    ]
}])

export default router;