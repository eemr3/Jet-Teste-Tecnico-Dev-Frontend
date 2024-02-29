'use client';
import Image from 'next/image';
import { ActionCell } from './ActionCell';
import { TableCell } from './TableCell';
import { Rating } from '../rating/Rating';
import { TableCellContent } from './TableCellContent';
import { ICard } from '../../common/interfaces';

export const TableRow = ({ car }: ICard) => {
  return (
    <div className="flex flex-row bg-gray-50">
      <TableCell>
        <TableCellContent className="flex gap-1 items-center">
          <Image src={car.image} width={40} height={40} alt={car.title} /> {car.title}
        </TableCellContent>
      </TableCell>
      <TableCell>{car.nextReservation}</TableCell>
      <TableCell>
        <TableCellContent
          className={
            car.status === 'Available'
              ? 'p-1 rounded bg-[#DEF7EC]'
              : 'p-1 rounded bg-red-200'
          }
        >
          {car.status}
        </TableCellContent>
      </TableCell>
      <TableCell>
        <Rating value={car.rating} />
      </TableCell>
      <ActionCell />
    </div>
  );
};
