import { styled, Stack } from '@mui/material';

export const Header = styled(Stack)(({ theme }) => ({
  padding: 16,
  borderBottom: `1px solid ${theme.palette.divider}`,
  ...theme.mixins.toolbar,
}));

export const Content = styled('div')(() => ({
  height: '100%',
  overflow: 'hidden',
  padding: 16,
}));

export const Footer = styled(Stack)(({ theme }) => ({
  padding: 16,
  borderTop: `1px solid ${theme.palette.divider}`,
  ...theme.mixins.toolbar,
}));
