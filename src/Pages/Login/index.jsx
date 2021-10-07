import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AUTH_USER } from '../../Api/api'
import Button from '../../Components/Button'
import Form from '../../Components/Form'
import Input from '../../Components/Input'
import styles from './_Login.module.scss'

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [login, setLogin] = React.useState(false)
    const [error, setError] = React.useState(false)
    const history = useHistory()

    const handleLogin = async (event) => {
        setError(false)
        event.preventDefault()
        const {url, options} = AUTH_USER({
            email: email,
            password: password
        })
        try {
            const {status} = await fetch(url, options)
            if (status === 200) {
                setLogin(true)
                history.push('/user')
            } else {
                setError(true)
            }
        } catch(err) {
            console.log(Error('Ocorreu um erro!'))
        }
    }

    return (
        <section className={styles.login}>
            <Form>
                <Input
                    label='Email'
                    type='text'
                    name='email'
                    onChange={({target}) => setEmail(target.value)}
                    value={email}
                />
                <Input
                    label='Senha'
                    type='password'
                    name='password'
                    onChange={({target}) => setPassword(target.value)}
                    value={password}
                />
                <Button onClick={handleLogin}>
                    Login
                </Button>
                {error ? <p style={{color: 'red', fontSize: '1.5em'}}>Usuario ou senha incorretos!</p> : null}
                <p className={styles.text}>
                    Se não possui cadastro clique
                    <Link to='/cadastro'> aqui </Link>
                    para se cadastrar.
                </p>
            </Form>
        </section>
    )
}

export default Login
