import { actions } from './constants';
import { HelloWorldStore } from './types';

export function helloWorldReducer(state: HelloWorldStore, action: PayloadAction): HelloWorldStore {
  switch (action.type) {
    case actions.HELLOWORLD_ACTION:
      return { ...state, message: 'Hello world!' };
    case actions.HELLOWORLD_SERVICE_ACTION_SUCCEED:
      return { ...state, result: action.result };
  }
  return state || { message: '', result: '' };
}
