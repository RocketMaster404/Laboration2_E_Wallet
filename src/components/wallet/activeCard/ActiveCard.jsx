import styles from "./ActiveCard.module.css"
import CardContainer from '../../cardContainer/CardContainer';

// Denna komponent visar det "aktiva kortet" Vi tar emot kort samt bank (för styling)
function ActiveCard({ card, bank }) {
    
    return (
        <div>
            <p className={styles.CardLabel}>ACTIVE CARD</p>
            <div className={styles.activeContainer}>
                <CardContainer
                    cardNumber={card.cardNumber}
                    cardHolderName={card.cardName}
                    validDate={card.validDate}
                    bank={bank}
                />
            </div>
        </div>
    );
}

export default ActiveCard