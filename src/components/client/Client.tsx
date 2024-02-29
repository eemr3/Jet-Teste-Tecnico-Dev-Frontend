'use client';
import { useEffect, useState } from 'react';
import { DataProvider } from '../../context/DataContext';

type ClientProps = {
  children: React.ReactNode;
};

const Client = ({ children }: ClientProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <DataProvider>{isClient ? children : null}</DataProvider>;
};

export default Client;
