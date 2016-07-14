import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Welcome } from '../components/Welcome';

test('<Welcome />', (t) => {
  const wrapper = shallow(<Welcome />);
  t.ok(wrapper.is('div'), 'has a div');
  t.end();
});
