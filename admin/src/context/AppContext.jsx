
import { createContext } from 'react';
import { AppContext } from './../../../frontend/src/context/AppContext';
import App from '../App';
export const AppContext = createContext();
const AppContextProvider = (props) => {

    const value = {

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;