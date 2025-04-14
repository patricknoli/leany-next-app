'use client';

import { useEffect, useState } from "react";
import { CounterSumProps } from "./types"

const CounterSum: React.FC<CounterSumProps> = ({ valuesRef, subscribe }) => {
  const [sum, setSum] = useState<number>(
    Object.values(valuesRef.current).reduce((acc, val) => acc + val, 0)
  );

  useEffect(() => {
    const updateSum = () => {
      const total = Object.values(valuesRef.current).reduce((acc, val) => acc + val, 0);
      setSum(total);
    };

    const unsubscribe = subscribe(updateSum);
    return () => unsubscribe();
  }, [subscribe, valuesRef]);

  return (
    <>
      <h1>Soma geral: {sum}</h1>
    </>
  )
}

export default CounterSum