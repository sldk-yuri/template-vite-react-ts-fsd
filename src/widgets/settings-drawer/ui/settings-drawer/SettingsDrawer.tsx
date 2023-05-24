import CloseIcon from '@mui/icons-material/Close';
import { InputLabel, Stack, Typography } from '@mui/material';
import { LayoutDrawer } from '~entities/layout';
import { CloseDrawerIconBtn } from '~features/layout';
import { ToggleThemeModeBtnGroup } from '~features/settings';

export function SettingsDrawer() {
  return (
    <LayoutDrawer
      drawerId="settings"
      header={
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography>Settings</Typography>
          <CloseDrawerIconBtn
            drawerId="settings"
            aria-label="close settings drawer"
          >
            <CloseIcon />
          </CloseDrawerIconBtn>
        </Stack>
      }
      content={
        <Stack spacing={1}>
          <InputLabel>Color theme</InputLabel>
          <ToggleThemeModeBtnGroup
            size="large"
            sx={{
              display: 'flex',
              '& .MuiButtonBase-root': { flexGrow: 1 },
            }}
          />
        </Stack>
      }
    />
  );
}
