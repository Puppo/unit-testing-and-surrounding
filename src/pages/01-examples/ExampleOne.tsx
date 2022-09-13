import { useState } from "react"

export default function ExampleOne() {
  const [count, setCount] = useState(0)

  return <>
    <h1>Example One</h1>

    <p>
      You clicked {count} times

      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </p>
  </>
}
