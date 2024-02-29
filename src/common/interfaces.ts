export interface ICard {
  car: InfCar;
}

interface InfCar {
  id: number;
  image: string;
  title: string;
  nextReservation: string;
  status: string;
  rating: number;
}

export interface IDataCar {
  cars: Cars[];
}

export interface Cars {
  id: number;
  image: string;
  title: string;
  nextReservation: string;
  status: string;
  rating: number;
}

export interface ITableLikeComponent {
  cars: Cars[];
}
