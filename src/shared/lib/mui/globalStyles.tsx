import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export function GlobalStyles() {
  return (
    <MUIGlobalStyles
      styles={{
        html: {
          width: '100%',
          height: '100%',
        },
        body: {
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
      }}
    />
  );
}
