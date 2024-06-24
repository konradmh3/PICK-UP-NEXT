export type RestaurantsTable = {
    id: string;
    name: string;
    phone: string;
    address: string;
  };

  export type MenuTable = {
    id: string;
    name: string;
    plate: string;
    customize: Array<string>;
  };