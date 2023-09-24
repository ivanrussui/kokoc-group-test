import React from 'react';
import {List} from "./components/List/List";
import {useAnimation} from "./helpers/useAnimation";
import styles from './App.module.scss';

function App() {

    const animationParams = {
        initialState: true,
        duration: 500,
    };

    const isShow = useAnimation(animationParams);
    const titleClassName = `${styles.Title} ${isShow && styles.Title_Animation}`;

    return (
        <div className={styles.App}>
            <div className={styles.Container}>
                <h1 className={titleClassName}>Новости</h1>
                <List/>
            </div>
        </div>
    );
}

export default App;
