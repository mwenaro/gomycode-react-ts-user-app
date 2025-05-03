type Coord = {
    lat: number;
    lng: number;
  };
  
  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: Coord
  }
  export interface IUser {
    id: number;
    name: string;
    username:string
    email: string;
    address: Address;
  }