import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

// must pass in props to be used\
// the value is always {{}} NOT {}

//2 Steps to using context, wrap component with provider and import acutal context for use

// The AuthContextProvider is the component that holds state and when wrapped around another component
// gives that components access to its state (this is used in App.js)

// The AuthContext that is exported above is imported into the component that has been wrapped and actually
// gives that component the state with ... = useContext(AuthContext)

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated)
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;