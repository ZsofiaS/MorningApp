import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import Lotus from '../src/components/Lotus';

describe('Lotus', () => {
  it('Lotus renders correctly', () => {
    renderer.create(<Lotus />);
  })
})
