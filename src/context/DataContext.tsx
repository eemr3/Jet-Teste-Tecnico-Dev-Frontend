'use client';
import React, { ReactNode, createContext, useContext } from 'react';
import { data as cars } from '../service/database/data';
// Definindo o tipo dos dados
interface DataItem {
  id: number;
  image: string;
  title: string;
  nextReservation: string;
  status: string;
  rating: number;
}

// Definindo o tipo do contexto
interface DataContextType {
  data: DataItem[];
}

// Criando o contexto para os dados
const DataContext = createContext<DataContextType>({ data: [] });

// Componente Provider para envolver a aplicação e prover os dados
export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <DataContext.Provider value={{ data: cars }}>{children}</DataContext.Provider>;
};

// Hook customizado para acessar os dados
export const useData = () => {
  return useContext(DataContext);
};
