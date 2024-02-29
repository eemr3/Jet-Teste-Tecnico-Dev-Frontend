'use client';
interface TableCellContentProps {
  children: React.ReactNode;
  className?: string;
}

export const TableCellContent = ({ children, className }: TableCellContentProps) => {
  return <div className={`${className}`}>{children}</div>;
};
