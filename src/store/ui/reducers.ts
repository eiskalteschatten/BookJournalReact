import { Reducer } from 'redux';

import { Actions } from './actions';

import {
  SET_SIDEBAR_WIDTH,
} from './constants';

export interface UiState {
  width: number;
}

export const initialState: UiState = {
  width: 200,
};

const reducer: Reducer<UiState, Actions> = (
  state = initialState,
  action: Actions
): any => {
  switch (action.type) {
    case SET_SIDEBAR_WIDTH:
      return {
        ...state,
        width: action.width,
      };
    default:
      return state;
  }
};

export default reducer;
