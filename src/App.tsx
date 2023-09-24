import React, {useEffect, useState} from 'react';
import {List} from "./components/List/List";
import styles from './App.module.scss';

function App() {
    const [isShow, setShow] = useState(true);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setShow(true);
        }, 20);
        return () => {
            clearTimeout(animationTimeout);
        };
    }, []);

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
