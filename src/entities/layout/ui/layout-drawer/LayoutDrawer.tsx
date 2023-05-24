import { ReactNode } from 'react';
import { Drawer } from '@mui/material';
import { StoreApi, useStore } from 'zustand';
import { LayoutState, layoutStore } from '../../model/layoutModel';
import { Header, Content, Footer } from './styled';

type LayoutDrawerProps = {
  drawerId: Id;
  model?: StoreApi<LayoutState>;
  width?: number;
  header: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
};

export function LayoutDrawer(props: LayoutDrawerProps) {
  const {
    drawerId,
    model = layoutStore,
    width = 280,
    header,
    content,
    footer,
  } = props;

  const isOpen = useStore(model, (state) => state.isOpen(drawerId));

  const handleClose = () => model.getState().closeDrawer(drawerId);

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      anchor="right"
      sx={{
        '& .MuiDrawer-paper': {
          maxWidth: width,
          width: '100%',
        },
      }}
    >
      <Header>{header}</Header>
      <Content>{content}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Drawer>
  );
}
