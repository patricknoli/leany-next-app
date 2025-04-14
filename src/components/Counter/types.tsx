export type CounterProps = {
  updateValue: (value: number) => void;
  id: string;
  initialValue: number;
  step: number;
}