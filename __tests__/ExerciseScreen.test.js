import React from 'react';
import renderer from 'react-test-renderer';
import ExerciseScreen from '../src/screens/ExerciseScreen';

test('exercisescreen renders correctly', () => {
  const tree = renderer.create(<ExerciseScreen />).toJSON();
  expect(tree).toMatchSnapshot();
})
