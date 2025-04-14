import Counter from "../Counter"
import { ListItemsProps } from "./types"

const ListItems: React.FC<ListItemsProps> = ({ items, setValue }) => {
  return (
    <>
      {items.map((item) => (
        <Counter key={item.id}
          id={item.id}
          updateValue={(value) => setValue(item.id, value)}
          initialValue={item.value}
          step={item.step}
        />
      ))}
    </>
  )
}

export default ListItems;