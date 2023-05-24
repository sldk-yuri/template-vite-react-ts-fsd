import { IconButton, IconButtonProps } from '@mui/material';
import { StoreApi } from 'zustand';
import { layoutModel } from '~entities/layout';

type CloseDrawerIconBtnProps = Omit<IconButtonProps, 'onClick'> & {
  drawerId: Id;
  model?: StoreApi<layoutModel.LayoutState>;
};

export function CloseDrawerIconBtn(props: CloseDrawerIconBtnProps) {
  const { drawerId, model = layoutModel.layoutStore, ...other } = props;

  const handleClose = () => model.getState().closeDrawer(drawerId);

  return <IconButton onClick={handleClose} {...other} />;
}
