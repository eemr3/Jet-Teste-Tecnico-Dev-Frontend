'use client';
const MenuOverflow = () => {
  return (
    <button
      className="transform rotate-90 h-12 w-12 bg-transparent text-gray-500 text-2xl
     font-bold rounded-full focus:outline-none"
    >
      <span className="inline-block transform -translate-y-1/2">...</span>
    </button>
  );
};

export default MenuOverflow;
