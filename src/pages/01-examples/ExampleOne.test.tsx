import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '../../test-utils';

import ExampleOne from './ExampleOne';

describe('ExampleOne', () => {

  test('should render', () => {
    // Arrange
    render(<ExampleOne />)

    // Act
    fireEvent.click(screen.getByText('Click Me!'));

    // Assert
    expect(screen.getByText(`You clicked 1 times`)).toBeInTheDocument()
  })

})