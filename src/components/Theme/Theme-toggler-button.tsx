import { useContext } from "react";
import { ThemeContext, themes } from "../../context/theme-context";
import { Button } from "./ThemeStyles";

const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <Button onClick={() => setTheme(theme === themes.dark ? themes.light : themes.dark)} >
                Change Theme
            </Button>
        </>
    )
}

export { ThemeTogglerButton, Button }