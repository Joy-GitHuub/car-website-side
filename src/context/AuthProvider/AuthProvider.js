import React, { createContext } from 'react';
import useFirebasse from '../../hooks/useFirebasse';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebasse();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;