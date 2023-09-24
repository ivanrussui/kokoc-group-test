import React, {useState} from "react";
import {LikeEmpty} from "./Like/LikeEmpty";
import {LikeFill} from "./Like/LikeFill";
import {ItemType} from "./ItemType";
import styles from './ListItem.module.scss';
import {useAnimation} from "../../../helpers/useAnimation";

export const ListItem: React.FC<{ data: ItemType }> = ({ data }) => {
    const [like, setLike] = useState(data.voteStatus);
    const [isHidden, setIsHidden] = useState(true);

    const toggleImage = () => {
        setLike(!like);
    };

    const handleLikeClick = () => {
        if (!data.voteStatus) {
            setLike(true);
        }
    };

    const toggleActive = () => {
        setIsHidden(!isHidden);
    };

    const animationParams = {
        initialState: true,
        duration: 500,
    };

    const isShow = useAnimation(animationParams);
    const textClassName = `${styles.Description__Text} ${isHidden && styles.Description__Text_Hidden}`;
    const itemClassName = `${styles.ListItem} ${isShow && styles.ListItem_NewsAnimation}`;

    return (
        <li className={itemClassName}>
            <img src={data.imgUrl} alt={data.name} className={styles.ListItem__Img}/>
            <div className={styles.Description}>
                <h2 className={styles.Description__Name}>{data.name}</h2>
                <span className={styles.Description__Date}>{data.date}</span>
                <p className={textClassName} onClick={toggleActive}>{data.text}</p>
                <div className={styles.Description__Bottom}>
                    <h3 className={styles.Description__Author}>{data.author}</h3>
                    <div className={styles.Description__Like} onClick={toggleImage}>
                        {like
                            ? <LikeFill className={styles.Description__LikeIcon}/>
                            : <LikeEmpty className={styles.Description__LikeIcon} onClick={handleLikeClick}/>
                        }
                    </div>
                </div>
            </div>
        </li>
    )
}
