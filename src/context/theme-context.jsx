import { createContext, useState } from "react";

const themes = {
    light: {
        background: "#ffffff"

    },
    dark: {
        background: "#101010"
    }
}

const ThemeContext = createContext({})

const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.dark)

    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        {props.children}
      </ThemeContext.Provider>  
    )
}

export { themes, ThemeContext, ThemeProvider }