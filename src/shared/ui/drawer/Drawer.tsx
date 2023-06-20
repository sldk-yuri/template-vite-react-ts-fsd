import { ReactNode } from 'react';
import { Drawer as MuiDrawer } from '@mui/material';
import { Header, Content, Footer } from './styled';

type DrawerProps = {
  open: boolean;
  onClose: VoidFunction;
  width?: number;
  header: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
};

export function Drawer(props: DrawerProps) {
  const { width = 280, header, content, footer, ...other } = props;

  return (
    <MuiDrawer
      anchor="right"
      sx={{
        '& .MuiDrawer-paper': {
          maxWidth: width,
          width: '100%',
        },
      }}
      {...other}
    >
      <Header>{header}</Header>
      <Content>{content}</Content>
      {footer && <Footer>{footer}</Footer>}
    </MuiDrawer>
  );
}
