export interface CUser {
  name: string;
  totalPortions: number;
  paidPortions: number;
  preferDoubleCoffee?: boolean;
  totalPortionsCost: number;
  totalPayments: number;
  roles?: string[];
  [label: string]: any;
}
