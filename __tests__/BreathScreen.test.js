import React from 'react';
import renderer from 'react-test-renderer';
import BreathScreen from '../src/screens/BreathScreen';

test('breathscreen renders correctly', () => {
  const tree = renderer.create(<BreathScreen />).toJSON();
  expect(tree).toMatchSnapshot();
})
