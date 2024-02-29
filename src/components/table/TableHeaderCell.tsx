'use client';
interface TableHeaderCellProps {
  children: React.ReactNode;
}

export const TableHeaderCell = ({ children }: TableHeaderCellProps) => {
  return (
    <div className="flex-1 px-5 py-3 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
      {children}
    </div>
  );
};
