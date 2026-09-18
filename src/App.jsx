import "./App.css";
import CardContainer from "./components/cardContainer/CardContainer";
import banks from "../src/data/banks";

function App() {
    const bank = banks[0];

    return (
        <>
            <CardContainer
                cardHolderName={"Steven Johnsson"}
                bank={bank}
                validDate={"12/12"}
                cardNumber={"xxxx xxxx xxxx xxxx"}
            />
        </>
    );
}

export default App;
