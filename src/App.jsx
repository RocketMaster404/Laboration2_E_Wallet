import "./App.css";
import { RouterProvider } from "react-router-dom";
import banks from "../src/data/banks";
import router from "./route/router";

function App() {
    

    return <>
    <RouterProvider router={router}/>
    </>;
}

export default App;
