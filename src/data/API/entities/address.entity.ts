import { BaseEntity } from "./base.entity";

export default interface AddressEntity extends BaseEntity {
  Distance: number;
  address: string;
  addressnumber: string;
  city: string;
  neighborhood: string;
  region: string;
  subregion: string;
  country: string;
  postalcode: string;
  longitude: number;
  latitude: number;
}