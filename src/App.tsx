import React from 'react';
import {List} from "./components/List/List";
import styles from './App.module.scss';

function App() {

    return (
        <div className={styles.App}>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Новости</h1>
                <List/>
            </div>
        </div>
    );
}

export default App;
