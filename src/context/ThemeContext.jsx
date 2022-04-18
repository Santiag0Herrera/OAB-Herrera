import { createContext, useState} from 'react';

const ThemeContext = createContext();
const ThemeProvider = ({children}) =>{
    const [lightTheme, setLightTheme] = useState(true)
    
    const handleTheme = () => {
        console.log("Funcion desde context")
    }

    const data={
        lightTheme,
        setLightTheme
    }

    return(
        <ThemeContext.Provider value={lightTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}
export default ThemeContext;