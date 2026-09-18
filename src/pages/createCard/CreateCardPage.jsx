import React from "react";
import CardForm from "../../components/createCardForm/CardForm";
import { useNavigate } from "react-router-dom";
import styles from "./createCardPage.module.css"

function CreateCardPage() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/")} className={styles.backButton}>Tillbaka</button>
            <CardForm />
        </div>
    );
}

export default CreateCardPage;
