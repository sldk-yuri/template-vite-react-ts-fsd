import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  ToggleButtonGroup,
  ToggleButton,
  ToggleButtonGroupProps,
} from '@mui/material';
import { StoreApi, useStore } from 'zustand';
import { settingsModel } from '~entities/settings';

type ToggleThemeModeBtnGroupProps = Omit<
  ToggleButtonGroupProps,
  'value' | 'onChange' | 'exclusive' | 'aria-label'
> & {
  model?: StoreApi<settingsModel.SettingsState>;
};

export function ToggleThemeModeBtnGroup(props: ToggleThemeModeBtnGroupProps) {
  const { model = settingsModel.settingsStore, ...other } = props;

  const themeMode = useStore(model, (state) => state.themeMode);

  const handleModeToggle = (_: any, newThemeMode: settingsModel.ThemeMode) => {
    if (!newThemeMode) return;
    model.getState().setThemeMode(newThemeMode);
  };

  return (
    <ToggleButtonGroup
      value={themeMode}
      onChange={handleModeToggle}
      exclusive
      aria-label="theme color mode"
      {...other}
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
