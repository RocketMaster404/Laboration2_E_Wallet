import "./App.css";
import CardContainer from "./components/cardContainer/CardContainer";
import banks from "../src/data/banks";
import CardForm from "./components/createCardForm/CardForm";

function App() {
    const bank = banks[0];

    return (
        <>
          <CardForm/>
        </>
    );
}

export default App;
