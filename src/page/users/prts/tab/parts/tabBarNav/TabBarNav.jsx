import React from 'react'

import {NavItem} from "./parts/navItem/NavItem";
import styles from './TabBarNav.module.scss'


export const TabBarNav = ({settings, selectTab, callback}) => {

    return (
        <div>
            <div className={styles.wrapper}>
                {
                    settings.map((el, index) => {
                        return <NavItem
                            key={index}
                            name={el.name}
                            status={selectTab === el.id}
                            id={el.id}
                            callback={(id) => callback(id)}/>
                    })
                }
            </div>
        </div>

    )
}