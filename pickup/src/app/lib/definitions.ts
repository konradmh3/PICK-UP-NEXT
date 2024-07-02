export type RestaurantsTable = {
    id: string;
    name: string;
    phone: string;
    address: string;
  };

  export type MenuTable = {
    id: string;
    name: string;
    menuitem: string;
    customize: Array<string>;
  };

  export type RestaurantField = {
    id: string;
    name: string;
    phone: string;
    address: string;
    test: number;
  };