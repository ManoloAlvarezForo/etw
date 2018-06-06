// @flow
import { GET_PREACHING_MODEL, CLEAN_PREACHING_MODEL, UPDATE_PREACHING_MODEL } from '../actions/preachings';

export type preachingStateType = {
    +preaching: Object
  };

type actionType = {
    +type: string
  };


export default function preaching(state = {fullDate: '', initDate: '', endDate: '', preachingsDays: [] }, action: actionType) {
  switch (action.type) {
    case GET_PREACHING_MODEL:
      return state = action.preaching;
    case CLEAN_PREACHING_MODEL:
      return state = action.preaching;
    case UPDATE_PREACHING_MODEL:
      return state = action.preaching;
    default:
      return state;
  }
}
