import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Stack,
  Typography,
  keyframes,
} from '@mui/material';
import { OpenDrawerFab } from '~features/layout';
import { FsdIcon, MuiIcon, ReactIcon, ViteIcon } from '~shared/ui/icons';
import { SettingsDrawer } from '~widgets/settings-drawer';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export function MainPage() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Container>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Card sx={{ maxWidth: 600, width: '100%', overflow: 'visible' }}>
          <CardActions sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <IconButton
              component="a"
              href="https://vitejs.dev"
              target="_blank"
              aria-label="Vite logo"
              sx={{
                willChange: 'filter',
                transition: 'filter 300ms',

                '&:hover': {
                  filter: 'drop-shadow(0 0 2em #646cffaa)',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <ViteIcon sx={{ fontSize: 100 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://react.dev"
              target="_blank"
              aria-label="React logo"
              sx={{
                willChange: 'filter',
                transition: 'filter 300ms',
                animation: `${spin} infinite 20s linear`,

                '&:hover': {
                  filter: 'drop-shadow(0 0 2em #61dafbaa)',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <ReactIcon sx={{ fontSize: 100 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://mui.com"
              target="_blank"
              aria-label="MaterialUI logo"
              sx={{
                willChange: 'filter',
                transition: 'filter 300ms',

                '&:hover': {
                  filter: 'drop-shadow(0 0 2em #007fffaa)',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <MuiIcon sx={{ fontSize: 100 }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://feature-sliced.design"
              target="_blank"
              aria-label="Feature-Sliced Design logo"
              sx={{
                willChange: 'filter',
                transition: 'filter 300ms',

                '&:hover': {
                  filter: 'drop-shadow(0 0 2em #3193ffaa)',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <FsdIcon sx={{ fontSize: 100 }} />
            </IconButton>
          </CardActions>
          <CardHeader
            title="Vite + React + MUI + FSD"
            titleTypographyProps={{
              variant: 'h4',
              component: 'h1',
              textAlign: 'center',
            }}
          />
          <CardActions disableSpacing sx={{ justifyContent: 'center' }}>
            <Button onClick={handleCount} variant="contained" size="small">
              count is {count}
            </Button>
          </CardActions>
          <CardContent>
            <Stack spacing={6}>
              <Typography textAlign="center">
                Edit <code>src/pages/main/ui/main-page/MainPage.tsx</code> and
                save to&nbsp;test HMR
              </Typography>
              <Typography variant="caption" component="p" textAlign="center">
                Click on the logos to learn more
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      <SettingsDrawer />
      <OpenDrawerFab
        drawerId="settings"
        size="small"
        aria-label="open settings drawer"
        sx={{ position: 'absolute', right: 16, bottom: 16 }}
      >
        <TuneIcon />
      </OpenDrawerFab>
    </Container>
  );
}
