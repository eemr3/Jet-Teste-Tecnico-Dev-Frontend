'use client';
import { useData } from '../../context/DataContext';
import { CardList } from '../cards/CardList';
import { TableLikeComponent } from '../table/TableLikeComponent';
import { useEffect, useState } from 'react';

export const ResponsiveComponent = () => {
  const { data } = useData();
  const [isTabletOrBigger, setIsTabletOrBigger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrBigger(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isTabletOrBigger]);

  return (
    <div>
      {isTabletOrBigger ? <TableLikeComponent cars={data} /> : <CardList cars={data} />}
    </div>
  );
};
