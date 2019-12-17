import { PayloadAction } from '../../types';
import { createAction } from '../../utils';
import { HelloWorldStore } from './types';
import { moduleName } from './constants';

export const actionTypes = {
  HELLOWORLD_ACTION: `${moduleName}.HELLOWORLD_ACTION`,
  HELLOWORLD_SERVICE_ACTION: `${moduleName}.HELLOWORLD_SERVICE_ACTION`,
  HELLOWORLD_SET_LOADING: `${moduleName}.HELLOWORLD_SET_LOADING`,
  HELLOWORLD_SERVICE_ACTION_FAILED: `${moduleName}.HELLOWORLD_SERVICE_ACTION_FAILED`,
  HELLOWORLD_SERVICE_ACTION_SUCCEED: `${moduleName}.HELLOWORLD_SERVICE_ACTION_SUSSED`,
};

export const actions = {
  sayHello: createAction(actionTypes.HELLOWORLD_ACTION),
  sayHelloFromServer: createAction(actionTypes.HELLOWORLD_SERVICE_ACTION),
};

export const initStore: HelloWorldStore = {
  message: '',
  loading: false,
  error: '',
};

export const helloWorldReducer = (state: HelloWorldStore = initStore, action: PayloadAction<any>) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.HELLOWORLD_ACTION:
      return { ...state, message: payload };
    case actionTypes.HELLOWORLD_SET_LOADING:
      return { ...state, loading: payload };
    case actionTypes.HELLOWORLD_SERVICE_ACTION_SUCCEED:
      return { ...state, message: payload };
    case actionTypes.HELLOWORLD_SERVICE_ACTION_FAILED:
      return { ...state, error: payload };
  }
  return state;
};
