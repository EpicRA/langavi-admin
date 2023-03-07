export interface IDiscount {
  code: string;
  quantity?: number;
  percentaje?: number;
  expirationDate?: string;
  active?: boolean;
}

export interface IOrderDiscount {
  code: string;
  quantity?: number;
  percentaje?: number;
}