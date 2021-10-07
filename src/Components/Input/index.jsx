import React from 'react'
import styles from './_Input.module.scss'

const Input = ({label, type, name, onChange, value}) => {
    return (
        <div className={styles.input}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default Input
