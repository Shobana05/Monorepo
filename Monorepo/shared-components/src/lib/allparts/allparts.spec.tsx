import React from 'react';
import { render, screen } from '@testing-library/react';
import Allparts from './Allparts';

describe('Allparts Component', () => {
  it('renders all parts with labels', () => {
    render(<Allparts text='' img='' className='' alt='' />);
  });

  // Add more test cases as needed
});