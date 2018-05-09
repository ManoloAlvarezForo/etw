// @flow
import { SET_TITLE } from '../actions/title';

export type titleStateType = {
  +counter: string
};

type actionType = {
  +type: string
};

export default function title(state: string = 'Default Title', action: actionType) {
  switch (action.type) {
    case SET_TITLE:
      return state = action.title;
    default:
      return state;
  }
}
