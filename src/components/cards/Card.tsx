'use client';
import Image from 'next/image';
import MenuOverflow from '../menu/MenuOverflow';
import { Rating } from '../rating/Rating';

export const CarCard = ({ item }: any) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="flex bg-white shadow-md overflow-hidden">
        <Image
          src={item.image}
          width={0}
          height={0}
          alt={item.title}
          className="w-20 h-20 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <MenuOverflow />
          </div>
          <p className="text-gray-600 mb-2">Next reservation: {item.nextReservation}</p>
          <div className="flex items-center mb-2">
            <Rating value={item.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};
