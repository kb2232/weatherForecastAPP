import { FETCH_WEATHER } from '../action/index';

/*
"action.payload.data, ...state" basically repeats and concatenate; example, say "action.payload.data"=== x, then [action.payload.data, ...state] will be [x, x1, x2, x3 ...]
*/
export default function(state=[], action)
{
  switch(action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}