import CloseIcon from '@mui/icons-material/Close';
import { Stack, Typography } from '@mui/material';
import { LayoutDrawer } from '~entities/layout';
import { CloseDrawerIconBtn } from '~features/layout';

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
      content={<Typography>Content</Typography>}
      footer={<Typography>Footer</Typography>}
    />
  );
}
