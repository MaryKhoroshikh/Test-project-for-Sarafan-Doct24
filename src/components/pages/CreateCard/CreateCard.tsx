import React from 'react';
import styles from './CreateCard.module.css';
import CreateCardForm from '../../ui/CreateCardForm/CreateCardForm';

function CreateCard() {
    return (
        <div className={styles.createCard}>
            <h2>Создание новой карточки</h2>
            <CreateCardForm />
        </div>
    );
}

export default CreateCard;
