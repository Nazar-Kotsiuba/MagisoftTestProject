import React from 'react'

import {Item} from "./parts/Item/Item";
import styles from './TabBarContent.module.css'

export const TabBarContent = ({data, btnStatus}) => {

    let arr = data.map((el, index) => {
        return <Item
            key={index}
            firstName={el.name.first}
            lastName={el.name.last}
            avatar={el.picture.thumbnail}
            id={el.id.value}
            user={el}
            btnStatus={btnStatus}
        />
    })


    return (
        <div className={styles.Wrapper}>
            {arr}
        </div>
    )
}