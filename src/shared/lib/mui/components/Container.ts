import { ComponentsProps } from '@mui/material';

export function Container() {
  return {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xxl',
      } as ComponentsProps['MuiContainer'],
    },
  };
}
