export const BottomMenuItem = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-1">
      {children}
      <span className="text-sm">{title}</span>
    </div>
  );
};
