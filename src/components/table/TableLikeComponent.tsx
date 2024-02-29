'use client';
import { ITableLikeComponent } from '../../common/interfaces';
import { TableHeaderRow } from './TableHeaderRow';
import { TableRow } from './TableRow';

export const TableLikeComponent = ({ cars }: ITableLikeComponent) => {
  return (
    <div className="h-screen w-full m-8">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <div className="flex flex-col">
            <TableHeaderRow />
            {cars.map((item) => (
              <TableRow key={item.id} car={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
