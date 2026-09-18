import styles from "./CardStack.module.css";
import CardContainer from "../../cardContainer/CardContainer";

// Denna component tar emot en array av kort samt banker och mappar ut korten i en visuell stack.
// Vi tar även emot SelectedCard - vid klick skickas kortid till HomePage som sätter det till aktivt (filtrerar bort det från stacken),


function CardStack({ cards, banks, SelectedCard }) {
    return (
        <div className={styles.cardStack}>
            {cards.map((card) => (
                <div
                    key={card.id}
                    className={styles.stackedCardWrapper}
                    onClick={() => SelectedCard(card.id)}
                >
                    <CardContainer
                        cardNumber={card.cardNumber}
                        cardHolderName={card.cardName}
                        validDate={card.validDate}
                        bank={banks.find((b) => b.id === card.bankId)}
                    />
                </div>
            ))}
        </div>
    );
}

export default CardStack;
