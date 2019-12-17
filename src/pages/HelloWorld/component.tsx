import React from 'react';
import './styles.less';
import { DatePicker } from 'antd';
import { actions } from './store';

export const HelloWorld = () => (
  <div className="root">
    <DatePicker />
  </div>
);
