import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
// @ts-ignore
import { theme } from './theme.ts';

export function App() {
  return (
      <ThemeProvider theme={theme}>
        <Button>
          Hello
        </Button>
      </ThemeProvider>
  )
}
