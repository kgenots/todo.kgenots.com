// routing
import Routes from '@/routes'

// defaultTheme
import themes from '@/themes'

import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import NavigationScroll from './layout/NavigationScroll'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes()}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
