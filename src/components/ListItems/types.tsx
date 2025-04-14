import { ItemsType } from "@/app/page"

export type ListItemsProps = {
  items: ItemsType[];
  setValue: (id: string, value: number) => void;
}