import { PaletteMode } from '@mui/material';
import { StateCreator, createStore, useStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type ThemeMode = PaletteMode;

export type SettingsState = {
  themeMode: ThemeMode;
  setThemeMode: (themeMode: ThemeMode) => void;
};

// TODO: add system preference theme mode checker
const createSettingsSlice: StateCreator<
  SettingsState,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  SettingsState
> = (set) => ({
  themeMode: 'dark',

  setThemeMode: (themeMode: ThemeMode) =>
    set({ themeMode }, false, 'settings/setThemeMode'),
});

export const settingsStore = createStore<SettingsState>()(
  persist(
    devtools(
      (...a) => ({
        ...createSettingsSlice(...a),
      }),
      { name: 'Settings Store' },
    ),
    { name: 'settings' },
  ),
);

export const useThemeMode = () =>
  useStore(settingsStore, (state) => state.themeMode);
