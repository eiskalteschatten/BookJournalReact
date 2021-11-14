import { Action } from 'redux';

import {
  SET_SIDEBAR_WIDTH,
} from './constants';

export interface UiSetSidebarWidth extends Action<typeof SET_SIDEBAR_WIDTH> {
  width: number;
}

export type Actions = UiSetSidebarWidth;

export const uiSetSidebarWidth = (width: number): UiSetSidebarWidth => ({ type: SET_SIDEBAR_WIDTH, width });
