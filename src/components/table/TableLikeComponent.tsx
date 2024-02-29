'use client';
import { TableHeaderRow } from './TableHeaderRow';
import { TableRow } from './TableRow';

const TableLikeComponent = ({ cars }: any) => {
  return (
    <div className="h-screen w-full m-8">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <div className="flex flex-col">
            <TableHeaderRow />
            {cars.map((item: any, index: any) => (
              <TableRow key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLikeComponent;
