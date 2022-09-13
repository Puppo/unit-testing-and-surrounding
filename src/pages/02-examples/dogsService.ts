const getRandomDogImage = async (): Promise<string> => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      return data.message;
    });
};

export default {
  getRandomDogImage,
};
