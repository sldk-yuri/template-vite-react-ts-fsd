import { ComponentsProps } from '@mui/material';

export function ButtonBase() {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      } as ComponentsProps['MuiButtonBase'],
    },
  };
}
