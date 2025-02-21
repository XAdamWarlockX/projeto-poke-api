import { GlobalStyle } from './styles/GlobalStyles'
import { AppRoute } from './pages/routes'
import { ThemeProvider } from './context/theme-context'

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <AppRoute />
      </ThemeProvider>
    </>
  )
}

export default App