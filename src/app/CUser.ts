export interface CUser {
  name: string;
  totalPortions: number;
  paidPortions: number;
  preferDoubleCoffee?: boolean;
  roles?: string[];
  [label: string]: any;
}
