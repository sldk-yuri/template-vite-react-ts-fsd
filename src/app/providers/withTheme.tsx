import { ReactNode, useMemo } from 'react';
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  ThemeOptions,
} from '@mui/material';
import { useStore } from 'zustand';
import { settingsModel } from '~entities/settings';
import { GlobalStyles, createTheme } from '~shared/lib/mui';

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const themeMode = useStore(
    settingsModel.settingsStore,
    (state) => state.themeMode,
  );

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
