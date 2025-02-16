import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

// It can receive any type of data or columns
interface TableProps<T> {
  columns: ColumnDef<T, any>[];
  data: T[];
}

const Table = <T,>({ columns, data }: TableProps<T>) => {
  // Avoids unnecessary re-renders
  const memoizedColumns = useMemo(() => columns, [columns]);
  const memoizedData = useMemo(() => data, [data]);

  const table = useReactTable({
    columns: memoizedColumns,
    data: memoizedData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="border border-gray-300 bg-gray-100 text-left"
          >
            {headerGroup.headers.map((header, index) => (
              <th
                key={header.id}
                className={"text-left text-sm p-2 border border-gray-300"}
                style={{
                  width: header.getSize(),
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr
            key={row.id}
            className="border-b border-gray-300 hover:bg-gray-50 text-left"
          >
            {row.getVisibleCells().map((cell, index) => (
              <td
                key={cell.id}
                className={"text-left text-sm p-2 border border-gray-300"}
                style={{
                  width: cell.column.getSize(),
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
