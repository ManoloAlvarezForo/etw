// @flow
import { GET_PREACHING_MODEL } from '../actions/preachings';

export type preachingStateType = {
    +preaching: Object
  };
  
  type actionType = {
    +type: string
  };
  

export default function preaching(state: Object = { date: '', preachings: []}, action: actionType) {
  switch (action.type) {
    case GET_PREACHING_MODEL:
      return state.preachingModel = action.preachingModel;
    default:
      return state;
  }
}
