import React from 'react'

import styles from './NotFound.module.scss'

export const NotFoundPage = () => {
    return (
        <div className={styles.wrapper}>
            <h1>404</h1>
            <h2>oops! page not found</h2>
        </div>
    )
}