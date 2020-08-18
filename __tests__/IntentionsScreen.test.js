import React from 'react';
import renderer from 'react-test-renderer';
import IntentionsScreen from '../src/screens/IntentionsScreen';

test('intentionsscreen renders correctly', () => {
  const tree = renderer.create(<IntentionsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
})
