import { ItemsType } from "@/app/page"

export type CounterSumProps = {
  valuesRef: React.RefObject<Record<string, number>>;
  subscribe: (cb: () => void) => () => void;
}