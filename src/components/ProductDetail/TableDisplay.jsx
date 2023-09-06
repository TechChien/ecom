export const TableDisplay = ({ header, data }) => {
  if (
    header.length === 0 ||
    data.length === 0 ||
    header.length !== data[0].length
  ) {
    return null;
  }

  return (
    <table className="">
      <thead>
        <tr className="px-4 py-2 text-xl md:text-2xl font-bold border-b-2 border-slate-600">
          {header.map((h, i) => {
            return <th key={i}>{h}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((r, i) => {
          return (
            <tr className="md:text-xl " key={1000 + i}>
              {r.map((d, di) => (
                <td
                  className="px-4 py-2 border-t border-slate-300"
                  key={2000 + di}
                >
                  {d}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
