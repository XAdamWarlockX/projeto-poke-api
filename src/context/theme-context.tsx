import { createContext, useState } from "react";
import { Theme, Themes, Props, ThemeContextType } from "./themeTypes"

const themes: Themes = {
    light: {
        background: "#ffffff"

    },
    dark: {
        background: "#101010"
    }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const ThemeProvider = (props: Props) => {

    const [ theme, setTheme ] = useState<Theme>(themes.dark)

    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        {props.children}
      </ThemeContext.Provider>  
    )
}

export { themes, ThemeContext, ThemeProvider }