import { StateCreator, createStore } from 'zustand';
import { devtools } from 'zustand/middleware';

export type LayoutState = {
  drawers: Record<Id, boolean>;
  openDrawer: (drawerId: Id) => void;
  closeDrawer: (drawerId: Id) => void;
  isOpen: (drawerId: Id) => boolean;
};

const createLayoutSlice: StateCreator<
  LayoutState,
  [['zustand/devtools', never]],
  [],
  LayoutState
> = (set, get) => ({
  drawers: {},

  openDrawer: (drawerId: Id) =>
    set(
      (state) => ({
        drawers: {
          ...state.drawers,
          [drawerId]: true,
        },
      }),
      false,
      `layout/openDrawer ${drawerId}`,
    ),

  closeDrawer: (drawerId: Id) =>
    set(
      (state) => ({
        drawers: {
          ...state.drawers,
          [drawerId]: false,
        },
      }),
      false,
      `layout/closeDrawer ${drawerId}`,
    ),

  isOpen: (drawerId: Id) => get().drawers[drawerId],
});

export const layoutStore = createStore<LayoutState>()(
  devtools(
    (...a) => ({
      ...createLayoutSlice(...a),
    }),
    { name: 'Layout Store' },
  ),
);
