import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  ToggleButtonGroup,
  ToggleButton,
  ToggleButtonGroupProps,
} from '@mui/material';
import { settingsModel } from '~entities/settings';

type ToggleThemeModeBtnGroupProps = Omit<
  ToggleButtonGroupProps,
  'value' | 'onChange' | 'exclusive' | 'aria-label'
>;

export function ToggleThemeModeBtnGroup(props: ToggleThemeModeBtnGroupProps) {
  const themeMode = settingsModel.useThemeMode();

  const handleModeToggle = (_: any, newThemeMode: settingsModel.ThemeMode) => {
    if (!newThemeMode) return;
    settingsModel.settingsStore.getState().setThemeMode(newThemeMode);
  };

  return (
    <ToggleButtonGroup
      value={themeMode}
      onChange={handleModeToggle}
      exclusive
      aria-label="theme color mode"
      {...props}
    >
      <ToggleButton value="light" aria-label="light theme mode">
        <LightModeIcon />
      </ToggleButton>
      <ToggleButton value="dark" aria-label="dark theme mode">
        <DarkModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
