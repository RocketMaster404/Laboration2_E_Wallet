import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./route/router";
import store from "./store/Store";

// Projektet är uppdelat i Components och pages, där pages motsvarar en sida på route.
// pages ansvarar för att hämta redux samt navigera.
// Componenterna ansvarar för hur något ser ut och tar emot sin data via props.
// Det gör att componenterna blir återanvändbara ex CardContainer används på startsidan samt vd skapandet av kort.

//Varje component ligger i en mapp med tillhörande css fil. Detta gör det enklare att navigera i mapparna - och man undviker stora css filer. 
// Jag har dock satt reset och centrering av body, alltså sånt som inte hör till en enskild component i app.css
// Istället för globala css filer använder jag mig av module.css - på så vis kan jag återanvända klassnamn utan att behöva oroa mig för att skriva över någon annan styling.

function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
