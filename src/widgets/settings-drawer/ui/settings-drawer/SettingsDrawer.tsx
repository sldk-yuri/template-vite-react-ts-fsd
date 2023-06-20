import CloseIcon from '@mui/icons-material/Close';
import { IconButton, InputLabel, Stack, Typography } from '@mui/material';
import { ToggleThemeModeBtnGroup } from '~features/settings';
import { Drawer } from '~shared/ui/drawer';

type SettingsDrawerProps = {
  open: boolean;
  onClose: VoidFunction;
};

export function SettingsDrawer(props: SettingsDrawerProps) {
  const { open, onClose } = props;

  return (
    <Drawer
      open={open}
      onClose={onClose}
      header={
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography>Settings</Typography>
          <IconButton onClick={onClose} aria-label="close settings drawer">
            <CloseIcon />
          </IconButton>
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
