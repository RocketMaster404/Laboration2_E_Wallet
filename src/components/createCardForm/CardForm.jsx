import { useState } from "react";
import banks from "../../data/banks";
import styles from "./CardForm.module.css";
import CardContainer from "../cardContainer/CardContainer";

// Denna component skapar nya kort - använder mig av en form för att ta emot info från avnändare. Återanvänder min cardContainer för att visa kortet live för användaren.
// Hämtar min "bank data" och mappar ut dessa för att ge användaren val av bank via selection sektionen.
// när all infon är mottagen skickar jag upp kortinformationen via  onSumbit

function CardForm({ onSubmit }) {
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [validDate, setValidDate] = useState("");
    const [ccv, setCcv] = useState("");
    const [bankId, setBankId] = useState("");

    const bank = banks.find((b) => b.id === Number(bankId));

    function handleSubmit(e) {
        e.preventDefault();

        onSubmit({
            bankId: Number(bankId),
            cardNumber,
            cardName,
            validDate,
            ccv,
        });
    }

    return (
        <div className={styles.createCardPage}>
            <div className={styles.showNewCardContainer}>
                <CardContainer
                    cardNumber={cardNumber}
                    cardHolderName={cardName}
                    validDate={validDate}
                    bank={bank}
                />
            </div>

            <form className={styles.cardForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="cardNumber">CARD NUMBER</label>
                    <input
                        id="cardNumber"
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="CardNumber"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="cardName">CARDHOLDER NAME</label>
                    <input
                        id="cardName"
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="FIRSTNAME LASTNAME"
                        required
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="validDate">VALID THRU</label>
                        <input
                            id="validDate"
                            type="text"
                            value={validDate}
                            onChange={(e) => setValidDate(e.target.value)}
                            placeholder="YY/MM"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="ccv">CCV</label>
                        <input
                            id="ccv"
                            type="text"
                            value={ccv}
                            onChange={(e) => setCcv(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="bank">VENDOR</label>
                    <select
                        name=""
                        id="bank"
                        value={bankId}
                        onChange={(e) => setBankId(e.target.value)}
                    >
                        <option value=""></option>
                        {banks.map((bank) => (
                            <option key={bank.id} value={bank.id}>
                                {bank.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button className={styles.submitButton} type="submit">
                    ADD CARD
                </button>
            </form>
        </div>
    );
}

export default CardForm;
