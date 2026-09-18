import chipLight from "../../assets/images/chip-light.svg";
import styles from "./CardContainer.module.css";

// Denna compnent visar visuellt kortet - kommer användas i flera delar av programmet.
// vissa delar använder sig av inline styling - bank objectet har logo/tema vilket vi tar emot via bank propsen.
// På så vis kan jag återanvända komponenten oavsett bank.

function CardContainer({ cardNumber, cardHolderName, validDate, bank }) {
    const backgroundColor = bank?.color || "#756767c9";
    const themeClass = bank?.theme === "dark" ? styles.dark : styles.light;

    return (
        <div
            className={`${styles.cardContainer} ${themeClass}`}
            style={{ backgroundColor }}
        >
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
