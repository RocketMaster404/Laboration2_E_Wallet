import styles from "./CardStack.module.css";
import CardContainer from "../../cardContainer/CardContainer";

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
