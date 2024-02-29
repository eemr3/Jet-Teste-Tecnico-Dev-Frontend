'use client';
import { TableCellContent } from './TableCellContent';
import { TableHeaderCell } from './TableHeaderCell';

export const TableHeaderRow = () => {
  return (
    <div className="flex flex-row bg-gray-100">
      <TableHeaderCell>
        <TableCellContent className="text-[1.15rem]">CAR</TableCellContent>
      </TableHeaderCell>
      <TableHeaderCell>
        <TableCellContent className="text-[1.15rem]">NEXT RESERVATION</TableCellContent>
      </TableHeaderCell>
      <TableHeaderCell>
        <TableCellContent className="text-[1.15rem]">STATUS</TableCellContent>
      </TableHeaderCell>
      <TableHeaderCell>
        <TableCellContent className="text-[1.15rem]">RATING</TableCellContent>
      </TableHeaderCell>
      <TableHeaderCell>
        <TableCellContent className="text-[1.15rem]">ACTIONS</TableCellContent>
      </TableHeaderCell>
    </div>
  );
};
