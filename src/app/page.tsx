'use client';

import CounterSum from "@/components/CounterSum";
import ListItems from "@/components/ListItems";
import { useValueStore } from "@/hooks/useValueStore";
import { useState } from "react";

export type ItemsType = {
  id: string;
  value: number;
  step: number;
};

export default function Home() {
  const [items, setItems] = useState<ItemsType[]>([
    { id: "1", value: 5, step: 1 },
    { id: "2", value: 10, step: 2 },
    { id: "3", value: 15, step: 3 },
    { id: "4", value: 20, step: 4 }
  ]);

  const { valuesRef, setValue, subscribe } = useValueStore(
    Object.fromEntries(items.map(item => [item.id, item.value]))
  );


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <CounterSum valuesRef={valuesRef} subscribe={subscribe} />

        <ListItems items={items} setValue={setValue} />
      </main>
    </div>
  );
}
