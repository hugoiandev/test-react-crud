import React from 'react'
import Button from '../../Components/Button'
import Form from '../../Components/Form'
import Input from '../../Components/Input'
import styles from './_Cadastro.module.scss'
import { Link } from 'react-router-dom'
import { CREATE_USER } from '../../Api/api'

const Cadastro = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [empresa, setEmpresa] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const [cadastro, setCadastro] = React.useState(false)
    const [error, setError] = React.useState(false)

    const handleCadastro = async (event) => {
        event.preventDefault()
        const {url, options} = CREATE_USER({
            name: name,
            email: email,
            empresa: empresa,
            phone: phone
        })
        try{
            const {status} = await fetch(url, options)
            if (status === 200) {
                setCadastro(true)
            }
        } catch(err) {
            setError(true)
            console.log(Error('Ocorreu um erro!'))
        }
    }


    return (
        <section className={styles.cadastro}>
            <Form>
                <Input
                    label='Nome'
                    type='text'
                    name='nome'
                    onChange={({target}) => setName(target.value)}
                    value={name}
                />
                <Input
                    label='Email'
                    type='text'
                    name='email'
                    onChange={({target}) => setEmail(target.value)}
                    value={email}
                />
                <Input
                    label='Empresa'
                    type='text'
                    name='empresa'
                    onChange={({target}) => setEmpresa(target.value)}
                    value={empresa}
                />
                <Input
                    label='Telefone'
                    type='number'
                    name='phone'
                    onChange={({target}) => setPhone(target.value)}
                    value={phone}
                />
                <Button onClick={handleCadastro}>
                    Cadastrar
                </Button>
                <p className={styles.text}>
                    Se já possui cadastro clique
                    <Link to='/'> aqui </Link>
                    para se logar.
                </p>
            </Form>
            {error && <p>Ocorreu um erro no registro! Tente novamente</p>}
            {cadastro && <div className={styles.successful}>Cadastrado com sucesso!</div>}
        </section>
    )
}

export default Cadastro
