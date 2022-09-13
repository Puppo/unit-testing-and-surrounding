
import { useEffect, useState } from 'react';
import dogsService from './dogsService';

export default function ExampleTwo() {
  const [dog, setDog] = useState<string>();

  useEffect(() => {
    dogsService.getRandomDogImage()
      .then(res => {
        setDog(res);
      })
  }, [])


  return <>
    <h1>Example Two</h1>

    <img src={dog} alt="dog" />
  </>
}
