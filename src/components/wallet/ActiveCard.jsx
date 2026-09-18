import React from "react";
import CardContainer from "../cardContainer/CardContainer";

// Denna component tar emot och kort och visar upp infon via CarcContainer - denan representerar det aktiva kortet i bygggnaden av wallet layouten

function ActiveCard({ card, bank }) {
    
    return (
        <div>
            <p>ACTIVE CARD</p>
            <div>
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

export default ActiveCard;
