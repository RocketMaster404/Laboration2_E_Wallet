
import CardForm from "../../components/createCardForm/CardForm";
import { useNavigate } from "react-router-dom";
import styles from "./createCardPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../reducers/cardReducer";



// Denna sida används för att skapa kort - vi använder oss av vår form.
// Vi får all info från CardForm och skapar objektet som läggs i redux (handleAddCard).
// Nytt id sätts via högsta befintliga (maxId) så det inte krockar.

function CreateCardPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cards = useSelector((state) => state.cards.cards);
    const maxId = cards.length > 0 ? Math.max(...cards.map((c) => c.id)) : 0;

    function handleAddCard(cardInfo) {
        const card = {
            id: maxId + 1,
            ...cardInfo,
        };
        dispatch(addCard(card));
        navigate("/");
    }

    return (
        <div>
            <button onClick={() => navigate("/")} className={styles.backButton}>
                Tillbaka
            </button>
            <CardForm onSubmit={handleAddCard} />
        </div>
    );
}

export default CreateCardPage;
