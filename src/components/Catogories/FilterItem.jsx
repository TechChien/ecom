import { FilterCheckBox } from "./FilterCheckBox";

export const FilterItem = ({ item }) => {
  return (
    <div>
      <h1 className="mb-3 text-xl font-bold">{item.mainClass}</h1>
      {item.subclass.map((s) => (
        <FilterCheckBox key={s.title} title={s.title} count={s.count} />
      ))}
    </div>
  );
};
