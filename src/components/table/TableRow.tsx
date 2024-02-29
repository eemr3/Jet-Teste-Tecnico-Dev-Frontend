'use client';
import Image from 'next/image';
import { ActionCell } from './ActionCell';
import { TableCell } from './TableCell';
import { Rating } from '../rating/Rating';
import { TableCellContent } from './TableCellContent';

export const TableRow = ({ item }: any) => {
  return (
    <div className="flex flex-row bg-gray-50">
      <TableCell>
        <TableCellContent className="flex gap-1 items-center">
          <Image src={item.image} width={40} height={40} alt={item.title} /> {item.title}
        </TableCellContent>
      </TableCell>
      <TableCell>{item.nextReservation}</TableCell>
      <TableCell>
        <TableCellContent
          className={
            item.status === 'Available'
              ? 'p-1 rounded bg-[#DEF7EC]'
              : 'p-1 rounded bg-red-200'
          }
        >
          {item.status}
        </TableCellContent>
      </TableCell>
      <TableCell>
        <Rating value={item.rating} />
      </TableCell>
      <ActionCell />
    </div>
  );
};
