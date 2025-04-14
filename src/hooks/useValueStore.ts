// hooks/useValueStore.ts
import { useRef } from "react";

type Callback = () => void;

export function useValueStore(initialValues: Record<string, number>) {
  const valuesRef = useRef<Record<string, number>>({ ...initialValues });
  const listeners = useRef<Callback[]>([]);

  const setValue = (id: string, value: number) => {
    valuesRef.current[id] = value;
    listeners.current.forEach(cb => cb());
  };

  const subscribe = (cb: Callback) => {
    listeners.current.push(cb);
    return () => {
      listeners.current = listeners.current.filter(fn => fn !== cb);
    };
  };

  return {
    valuesRef,
    setValue,
    subscribe,
  };
}
