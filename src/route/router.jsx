import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CreateCardPage from "../pages/createCard/CreateCardPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/createCard",
        element: <CreateCardPage />,
    },
]);

export default router;
