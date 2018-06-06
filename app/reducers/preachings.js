// @flow
import { LOAD_PREACHINGS, GET_PREACHING_MODEL } from '../actions/preachings';

type actionType = {
    +type: string
  };

export default function preachings(state = [], action: actionType) {
  switch (action.type) {
    case LOAD_PREACHINGS:
      return state = action.preachings;
    default:
      return state;
  }
}
