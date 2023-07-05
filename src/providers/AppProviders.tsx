import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'
import React from 'react'

export const AppProviders = ({children} : {children : React.ReactNode}  ) => {
  const theme = createTheme({
    palette:{
      mode:'dark'
    }
  })
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
  )
}
