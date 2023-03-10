import { IAddress } from "./order";

export interface IClient {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  addresses: IAddress[];
  // orders: string[];
}

export interface IContactForm {
  name: string;
  email: string;
  phoneNumber: string;
  message?: string;
}
