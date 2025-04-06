import { Chip } from "@/components/common/Chip";
import { CATEGORIES } from "@/enums";
import { useCallback, useState } from "react";

export const ChipList = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const lists = Object.values(CATEGORIES);

  const onChangeList = useCallback(
    (i: string) => {
      if (!selected.includes(i)) {
        setSelected([...selected, i]);
      } else {
        const filtered = selected.filter(v => v !== i);
        setSelected(filtered);
      }
    },
    [selected]
  );

  return (
    <div className="grid grid-cols-5 mt-5 px-5 overflow-x-auto whitespace-nowrap w-full hide-scrollbar">
      <div className="inline-flex justify-between">
        {lists.map(i => (
          <Chip
            text={i}
            key={i}
            checked={selected.includes(i)}
            onChange={onChangeList}
          />
        ))}
      </div>
    </div>
  );
};
