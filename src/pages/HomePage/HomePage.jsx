import { useState } from "react";
import ActiveCard from "../../components/wallet/activeCard/ActiveCard";
import { useSelector } from "react-redux";
import banks from "../../data/banks";
import styles from "./HomePage.module.css";
import CardStack from "../../components/wallet/cardStack/CardStack";
import { Link } from "react-router-dom";


// Detta är startsidan för hemsidan,här ser man sin Wallet (jag har lagt in fake data så 4 kort visas från start). Korten hämtas från redux
// activeId styr uppdelning av hur korten visas - kortet med activeId visas i componenten ActiveCard medan CardStack filtrerar ut kortet med ActiveId och visar resterande
// Vilket kort som är aktivt kan användaren välja genom att klicka på kortet

function HomePage() {
    const cards = useSelector((state) => state.cards.cards);
    const [activeId, setActiveId] = useState(cards[0].id);

    const activeCard = cards.find((c) => c.id === activeId);
    const cardStack = cards.filter((c) => c.id !== activeId);
    const BankLayout = banks.find((b) => b.id === activeCard.bankId);

    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.walletTitle}>E-WALLET</h1>
            <ActiveCard card={activeCard} bank={BankLayout} />
            <CardStack
                cards={cardStack}
                banks={banks}
                SelectedCard={setActiveId}
            />
            <Link to={"/createCard"} className={styles.addCardButton}>
            ADD A NEW CARD
            </Link>
        </div>
    );
}

export default HomePage;
