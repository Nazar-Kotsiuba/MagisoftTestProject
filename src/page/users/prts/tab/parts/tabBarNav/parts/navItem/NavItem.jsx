import React from 'react'
import cLassNames from 'classnames'

import styles from './NavItem.module.scss'

export const NavItem = ({name, status, id, callback}) => {

    const itemClass = cLassNames({
        [styles['navItem']]: true,
        [styles['activeItem']]: status
    })

    return (
        <div>
            <div className={itemClass} onClick={() => {callback(id)}}>{name}</div>
        </div>
    )
}