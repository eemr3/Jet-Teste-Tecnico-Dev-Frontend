'use client';
import { StarIcon } from '@heroicons/react/24/solid';
export const Rating = ({ value }: { value: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-5 w-5 ${index < value ? 'text-yellow-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};
