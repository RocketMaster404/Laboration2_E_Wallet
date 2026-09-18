import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateCardPage from "../pages/CreateCardPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/createCard",
        element: <CreateCardPage/>
    }
]);

export default router;
