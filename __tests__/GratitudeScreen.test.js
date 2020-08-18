import React from 'react';
import renderer from 'react-test-renderer';
import GratitudeScreen from '../src/screens/GratitudeScreen';

test('gratitudescreen renders correctly', () => {
  const tree = renderer.create(<GratitudeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
})
