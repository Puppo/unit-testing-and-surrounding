import '@testing-library/jest-dom';
import { describe, expect, Mocked, test, vi } from 'vitest';
import { render, screen, waitFor } from '../../test-utils';
import dogsService from './dogsService';

import ExampleTwo from './ExampleTwo';

const dogsServiceMocked = dogsService as unknown as Mocked<typeof dogsService>;

vi.mock('./dogsService', () => {
  return {
    default: {
      getRandomDogImage: vi.fn()
    }
  }
})

describe('ExampleTwo', () => {

  describe('Mocking the dogsService module', () => {

    test('should render the dogs images', async () => {
      dogsServiceMocked.getRandomDogImage.mockResolvedValue('https://images.dog.ceo/breeds/cattledog-australian/IMG_5481.jpg')

      render(<ExampleTwo />)

      await waitFor(() => expect(screen.getByRole('img'))
        .toHaveAttribute('src', 'https://images.dog.ceo/breeds/cattledog-australian/IMG_5481.jpg'))
    })

  });

})