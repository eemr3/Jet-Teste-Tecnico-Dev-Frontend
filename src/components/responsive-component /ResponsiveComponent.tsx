'use client';
import { useData } from '../../context/DataContext';
import { CardList } from '../cards/CardList';
import { TableLikeComponent } from '../table/TableLikeComponent';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const ResponsiveComponent = () => {
  const { data } = useData();
  const isTabletOrBigger = useMediaQuery({ query: '(min-width: 768px)' });
  // const [isTabletOrBigger, setIsTabletOrBigger] = useState(true);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsTabletOrBigger(window.innerWidth >= 768);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [isTabletOrBigger]);

  return (
    <div>
      {isTabletOrBigger ? <TableLikeComponent cars={data} /> : <CardList cars={data} />}
    </div>
  );
};
