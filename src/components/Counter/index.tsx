'use client';

import { useEffect, useState } from "react";
import { CounterProps } from "./types";

const Counter: React.FC<CounterProps> = ({ updateValue, initialValue, step, id }) => {
  const [counter, setCounter] = useState<number>(initialValue);

  useEffect(() => {
    updateValue(counter);
  }, [counter])

  console.log(`Renderizando counter ${id}`)

  return (
    <>
      <h1>{counter}</h1>

      <button className="cursor-pointer bg-white p-4 text-black" onClick={() => setCounter((prev) => prev + step)}>+</button>
      <button className="cursor-pointer bg-white p-4 text-black" onClick={() => setCounter((prev) => prev - step)}>-</button>
    </>
  )
}

export default Counter;