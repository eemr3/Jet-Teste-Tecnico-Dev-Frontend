'use client';
import { IDataCar } from '../../common/interfaces';
import { CarCard } from './Card';

export const CardList = ({ cars }: IDataCar) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {cars.map((item, index) => (
        <CarCard key={index} car={item} />
      ))}
    </div>
  );
};
