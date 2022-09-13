import { describe } from "vitest";

import dogsService from "./dogsService";

const mockFetchResult = {
  body: JSON.stringify({
    message: "https://images.dog.ceo/breeds/cattledog-australian/IMG_5481.jpg",
    status: "success",
  }),
};

describe("dogsServices", () => {
  test("should call the api to get a random image of a dog", async () => {
    fetchMock.mockIf(
      "https://dog.ceo/api/breeds/image/random",
      () => mockFetchResult
    );

    await dogsService.getRandomDogImage();

    expect(fetchMock).toBeCalledWith("https://dog.ceo/api/breeds/image/random");
  });

  test("should call the api to get a random image of a dog and get onl", async () => {
    fetchMock.mockIf(
      "https://dog.ceo/api/breeds/image/random",
      () => mockFetchResult
    );

    await dogsService.getRandomDogImage();

    expect(fetchMock).toBeCalledWith("https://dog.ceo/api/breeds/image/random");
  });
});
