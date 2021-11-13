import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

// useAuth Declare
const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;