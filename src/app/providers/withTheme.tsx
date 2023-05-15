import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  ThemeOptions,
} from '@mui/material';
import { ReactNode, useMemo } from 'react';
import { GlobalStyles, createTheme } from '~shared/lib/mui';

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const themeMode = 'dark';

  const theme: ThemeOptions = useMemo(
    () => createTheme(themeMode),
    [themeMode],
  );

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
