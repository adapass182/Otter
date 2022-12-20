import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const mockOnClick = jest.fn();

  test('renders the Button component with label', () => {
    const TestButton = <Button label='Test' onClick={mockOnClick} />;
    render(TestButton);
    expect(TestButton.props.label).toEqual('Test');
  });
});
