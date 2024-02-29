'use client';
interface TableCellProps {
  children: React.ReactNode;
}

export const TableCell = ({ children }: TableCellProps) => {
  return (
    <div className="flex flex-1 items-center px-5 py-5 border-b border-gray-200 text-sm">
      {children}
    </div>
  );
};
