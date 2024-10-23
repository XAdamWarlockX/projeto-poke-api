import { useContext } from "react";
import { ThemeContext, themes } from "../../context/theme-context";
import styled from "styled-components"

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

const Button = styled.button`
    padding: 8px;
    border-radius: 10px;
    background-color: cornflowerblue;
    cursor: pointer;
    font-size: 18px;
`

export { ThemeTogglerButton, Button }