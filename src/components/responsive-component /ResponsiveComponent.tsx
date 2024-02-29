'use client';
import { useData } from '../../context/DataContext';
import { CardList } from '../cards/CardList';
import { TableLikeComponent } from '../table/TableLikeComponent';
import { useMediaQuery } from 'react-responsive';

export const ResponsiveComponent = () => {
  const { data } = useData();
  const isTabletOrBigger = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div>
      {isTabletOrBigger ? <TableLikeComponent cars={data} /> : <CardList cars={data} />}
    </div>
  );
};
