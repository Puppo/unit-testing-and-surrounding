import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { fetchMock, render, screen, waitFor } from '../../test-utils';

import ExampleTwo from './ExampleTwo';

const mockFetchResult = {
  body: JSON.stringify({
    message: "https://images.dog.ceo/breeds/cattledog-australian/IMG_5481.jpg",
    status: "success",
  }),
};

describe('ExampleTwo', () => {

  describe('Mocking the fetch module', () => {
    test('should render the dogs images', async () => {
      fetchMock.mockIf("https://dog.ceo/api/breeds/image/random", () => mockFetchResult)

      render(<ExampleTwo />)

      await waitFor(() => expect(screen.getByRole('img'))
        .toHaveAttribute('src', 'https://images.dog.ceo/breeds/cattledog-australian/IMG_5481.jpg'))
    })
  })
})