interface MonoTableProps {
  data: (string | number)[][];
}

export default function MonoTable({ data }: MonoTableProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full font-mono text-sm border-collapse">
        <thead>
          <tr className="border-b border-neutral-950">
            {data[0].map((header, index) => (
              <th
                key={index}
                className="whitespace-nowrap px-4 py-2 text-left font-normal border-r border-neutral-950 last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-neutral-950 last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="whitespace-nowrap px-4 py-2 border-r border-neutral-950 last:border-r-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
