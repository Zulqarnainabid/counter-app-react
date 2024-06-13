import { useState } from "react";


export default function App() {
  // let count = 1;

  let [count, setCount] = useState(0)

  function add() {
    count = count + 1
    setCount(count)
    console.log(count);
  }

  function remove() {
    count = count - 1
    setCount(count)
    console.log(count);
  }

  function reset() {
    setCount(count = 0)
    console.log(count);
  }
  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={remove}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={add}>+</button>
    </>
  )
}
