import React from 'react'
import { useLocation } from 'react-router'
import styles from './_Title.module.scss'

const Title = () => {
    const { pathname } = useLocation()
    let title

    switch(pathname) {
        case '/cadastro': {
            title = 'Cadastro'
            break
        }
        case '/lista': {
            title = 'Lista de Clientes'
            break
        }
        case '/user': {
            title = 'Usuário'
            break
        }
        default: {
            title = 'Login'
        }
    }

    return (
        <div className={styles.title}>
            <h1>{title}</h1>
        </div>
    )
}

export default Title
