import React from 'react';
import { connect } from 'react-redux';
import './styles.less';
import { Button } from 'antd';
import { ReduxStore } from '../../store';
import { actions } from './store';
import { Props } from './types';

const HelloWorldComponent = (props: Props) => {
  console.log('props ', props);
  return (
    <div className="root">
      <div>
        <Button onClick={() => props.sayHello('John')} type="primary">
          Say Hello
        </Button>
      </div>
      <div>
        <Button onClick={() => props.sayHelloFromServer('John')} type="primary">
          Say Hello From Server
        </Button>
      </div>
    </div>
  );
};

export const HelloWorld = connect(
  (state: ReduxStore) => ({
    message: state.helloWorld.message,
  }),
  actions,
)(HelloWorldComponent);
