import { Fab, FabProps } from '@mui/material';
import { StoreApi } from 'zustand';
import { layoutModel } from '~entities/layout';

type SettingsDrawerProps = Omit<FabProps, 'onClick'> & {
  drawerId: Id;
  model?: StoreApi<layoutModel.LayoutState>;
};

export function OpenDrawerFab(props: SettingsDrawerProps) {
  const { drawerId, model = layoutModel.layoutStore, ...other } = props;

  const handleOpen = () => model.getState().openDrawer(drawerId);

  return <Fab onClick={handleOpen} {...other} />;
}
