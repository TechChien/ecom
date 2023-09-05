export const DropDownList = ({ name, options, onChange, children }) => {
  const handleChange = (e) => {
    if (onChange && typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <select name={name} value={children} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.title} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
