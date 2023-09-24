import React from "react";
import {LikeEmpty} from "./Like/LikeEmpty";
import {ItemType} from "./ItemType";
import {useAnimation} from "../../../helpers/useAnimation";
import styles from './ListItem.module.scss';

export const ListItem: React.FC<{ data: ItemType }> = ({data}) => {

    const animationParams = {
        initialState: true,
        duration: 500,
    };

    const isShow = useAnimation(animationParams);
    const itemClassName = `${styles.ListItem} ${isShow && styles.ListItem_NewsAnimation}`;

    if (!data) {
        return <></>
    }

    return (
        <li className={itemClassName}>
            <a href='https://ya.ru/' target='_blank' rel='noreferrer' draggable='false' className={styles.ListItem__Link}>
                <img src={data.imgUrl} alt='img' className={styles.ListItem__Img}/>
                <div className={styles.Description}>
                    <h2 className={styles.Description__Name}>{data.name}</h2>
                    <span className={styles.Description__Date}>{data.date}</span>
                    <div className={styles.Description__Text}>{data.text}</div>
                    <div className={styles.Description__Bottom}>
                        <h3 className={styles.Description__Author}>{data.author}</h3>
                        <div>
                            {data.voteStatus === undefined
                                ? <></>
                                : <LikeEmpty className={styles.Description__LikeIcon}/>
                            }
                        </div>
                    </div>
                </div>
            </a>
        </li>
    )
}
