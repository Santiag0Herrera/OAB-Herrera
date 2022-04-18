import React,{createContext, useState, useContext} from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [lightTheme, setLightTheme] = useState(true)
    
    const handleTheme = () => {
        console.log("Se cambio el tema del sitio")
    }

    const data = {
        lightTheme,
        setLightTheme
    }

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}
export default ThemeContext 