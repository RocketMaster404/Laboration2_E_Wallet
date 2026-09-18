import chipLight from "../../assets/images/chip-light.svg";
import styles from "./CardContainer.module.css";

function CardContainer({ cardNumber, cardHolderName, validDate, bank }) {
    const backgroundColor = bank?.color || "#756767c9";
    return (
        <div className={styles.cardContainer} style={{ backgroundColor }}>
            <div className={styles.chipLogoContainer}>
                <div className={styles.chipContainer}>
                    <img src={chipLight} alt="" />
                </div>

                <div className={styles.bankLogoContainer}>
                    {bank?.logo && <img src={bank.logo} alt={bank.name} />}
                </div>
            </div>

            <div className={styles.cardNumberContainer}>
                <h1>{cardNumber}</h1>
            </div>

            <div className={styles.cardInfoContainer}>
                <div className={styles.cardInfoBlock}>
                    <h3>Cardholder name</h3>
                    <h2>{cardHolderName}</h2>
                </div>
                <div className={`${styles.cardInfoBlock} ${styles.right}`}>
                    <h3>Valid Thru</h3>
                    <h2>{validDate}</h2>
                </div>
            </div>
        </div>
    );
}

export default CardContainer;
