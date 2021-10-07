import React from 'react'
import styles from './_Form.module.scss'

const Form = ({children}) => {
    return (
        <form className={styles.form}>
            {children}
        </form>
    )
}

export default Form
