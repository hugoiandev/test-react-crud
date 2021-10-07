import React from 'react'
import styles from './_Button.module.scss'

const Button = ({onClick, children}) => {
    return (
        <div className={styles.button}>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button
