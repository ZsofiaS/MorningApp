import Lotus from '../src/components/Lotus';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Lotus />).toJSON();
  expect(tree).toMatchSnapshot();
});
