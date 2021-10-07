import React from 'react'

export const UserContext = React.createContext()

const GlobalStorage = ({children}) => {

    const [error, setError] = React.useState(false)

    return (
        <UserContext.Provider value={{
            error,
            setError
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default GlobalStorage
