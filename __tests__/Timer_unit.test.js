import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import Timer from '../src/components/Timer';

describe('Timer', () => {
  it('Timer renders correctly', () => {
    renderer.create(<Timer />);
  })
})
