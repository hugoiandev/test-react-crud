import React from 'react'
import { DELETE_USER, GET_USER, UPDATE_USER } from '../../Api/api'
import styles from './_Lista.module.scss'
import {ReactComponent as DeleteIcon } from '../../Assets/lixeira.svg'
import {ReactComponent as EditIcon } from '../../Assets/editar.svg'
import Form from '../../Components/Form'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { ReactComponent as QuitIcon } from '../../Assets/quit.svg'

const Lista = () => {
    const {url} = GET_USER()
    const [users, setUsers] = React.useState(null)
    const [id, setId] = React.useState(null)
    const [del, setDel] = React.useState(false)
    const [edit, setEdit] = React.useState(false)

    //Formulario
    const [idUpdate, setIdUpdate] = React.useState(null)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [empresa, setEmpresa] = React.useState('')
    const [phone, setPhone] = React.useState('')

    React.useEffect(() => {
        const getUsers = async () => {
            const response = await fetch(url)
            const json = await response.json()
            setUsers(json)
        }
        getUsers()
    }, [url])


    
    const handleDelete = async () => {
        const {url, options} = DELETE_USER({
            id: id
        })
        const {status} = await fetch(url, options)
        if (status === 200) {
            setDel(true)
        }
        console.log(status)
    }
        
    

    const handleEdit = async (event) => {
        event.preventDefault()
        const {url, options} = UPDATE_USER({
            id: idUpdate,
            name: name,
            email: email,
            company: empresa,
            phone: phone
        })
        const {status} = await fetch(url, options)
        console.log(status)
        setEdit(false)
    }


    return (
        <>
            <section className={styles.lista}>
            {del && <p>Deletado com sucesso!</p>}
                {users && users.map((item) => {
                    return (
                        <div className={styles.divlist} key={item.id}>
                            <ul>
                                <li>Nome: {item.name}</li>
                                <li>Email: {item.email}</li>
                                <li>Empresa: {item.company}</li>
                                <li>Telefone: {item.phone}</li>
                            </ul>
                            <div className={styles.icons}>
                                <button
                                    id={item.id}
                                    onClick={(event) => {
                                        event.preventDefault()
                                        setId(event.currentTarget.id)
                                        handleDelete()
                                    }
                                    }>
                                    <DeleteIcon />
                                </button>
                                <button
                                    id={item.id}
                                    onClick={(event) => {
                                        event.preventDefault()
                                        setIdUpdate(event.currentTarget.id)
                                        setEdit(true)
                                    }}
                                    >
                                    <EditIcon />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </section>
            {edit && <div className={styles.edit}>
                <Form>
                    <button
                        className={styles.quit}
                        onClick={(event) => {
                            event.preventDefault()
                            setEdit(false)
                        }}
                    >
                        <QuitIcon />
                    </button>
                    <Input
                        label='Nome'
                        name='name'
                        onChange={({target}) => setName(target.value) }
                        value={name}
                    />
                    <Input
                        label='Email'
                        name='email'
                        onChange={({target}) => setEmail(target.value) }
                        value={email}
                    />
                    <Input
                        label='Empresa'
                        name='empresa'
                        onChange={({target}) => setEmpresa(target.value) }
                        value={empresa}
                    />
                    <Input
                        label='Telefone'
                        name='telefone'
                        onChange={({target}) => setPhone(target.value) }
                        value={phone}
                    />
                    <Button onClick={handleEdit}>
                        Salvar
                    </Button>
                    {edit && <p>Atualizado com sucesso!</p>}
                </Form>
            </div>}
        </>
    )
}

export default Lista
