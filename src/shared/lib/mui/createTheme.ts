import { createTheme as muiCreateTheme, PaletteMode } from '@mui/material';
import breakpoints from './breakpoints';
import { componentsOverrides } from './components';

export function createTheme(themeMode: PaletteMode) {
  return muiCreateTheme({
    breakpoints,
    components: componentsOverrides(),
    palette: {
      mode: themeMode,
    },
  });
}
