import React, {useEffect, useState} from "react";
import {ListItem} from "./ListItem/ListItem";
import {DataType} from "./ListType";
import {fetchData} from "../../api/api";
import {ItemType} from "./ListItem/ItemType";
import styles from './List.module.scss';


export const List: React.FC<DataType> = () => {
    const [list, setList] = useState<ItemType[]>([])

    useEffect(() => {
        const fetchDataAndSetList = async () => {
            try {
                const data = await fetchData();
                setList(data);
                console.log('data', data)
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchDataAndSetList();
    }, []);

    return (
        <ul className={styles.List}>
            {list.map((item) => <ListItem data={item} key={item.id}  /> )}
        </ul>
    )
}