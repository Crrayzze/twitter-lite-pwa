import BaseAPI from "./baseApi";
import AddressEntity from "./entities/address.entity";

export default class AddressAPI extends BaseAPI {

  constructor() {
    const apiKey: string = process.env.REACT_APP_ADDRESS_API_KEY || '';
    const apiHost: string = process.env.REACT_APP_API_HOST || '';

    super('https://address-from-to-latitude-longitude.p.rapidapi.com/', 
      {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
      }
    );
  }

  async getAddressByCoordinates(lat: number, long: number): Promise<AddressEntity> {
    const response = await this.get<any>(`geolocationapi?lat=${lat}&lng=${long}`);
    return response.Results[0];
  }
}