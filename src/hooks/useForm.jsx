import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [user, setUser] = useState(initialState);

    const reset = () => {
        setUser( initialState );
    }
    const handleInputChange = ({ t }) => {

        setUser({
            ...user,
            [ t.name ]: t.value

        });

    }
    return [ user, handleInputChange, reset ];
}