'use client';
import Image from 'next/image';
import MenuOverflow from '../menu/MenuOverflow';
import { Rating } from '../rating/Rating';
import { ICard } from '../../common/interfaces';

export const CarCard = ({ car }: ICard) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="flex bg-white shadow-md overflow-hidden">
        <Image
          src={car.image}
          width={0}
          height={0}
          alt={car.title}
          className="w-20 h-20 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{car.title}</h2>
            <MenuOverflow />
          </div>
          <p className="text-gray-600 mb-2">Next reservation: {car.nextReservation}</p>
          <div className="flex items-center mb-2">
            <Rating value={car.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};
