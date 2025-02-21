import { ReactNode } from "react"

interface Theme {
  background: string
}

interface Themes {
  light: {
    background: string
  }
  dark: {
    background: string
  }
}

interface Props {
  children: ReactNode
}

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export { Theme, Themes, Props, ThemeContextType }