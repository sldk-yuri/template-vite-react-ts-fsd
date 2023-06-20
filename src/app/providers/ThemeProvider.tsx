import { ReactNode, useMemo } from 'react';
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  ThemeOptions,
} from '@mui/material';
import { settingsModel } from '~entities/settings';
import { GlobalStyles, createTheme } from '~shared/lib/mui';

export function ThemeProvider(props: { children: ReactNode }) {
  const { children } = props;

  const themeMode = settingsModel.useThemeMode();

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
