export type ItineraryItem = {
  time: string;
  activity: string;
  location: string;
  duration: string;
  transport?: string;
  note?: string;
  googleMapsUrl: string;
};

export type DayPlan = {
  day: number;
  date: string;
  title: string;
  items: ItineraryItem[];
};

export enum FoodCategory {
  ALL = '全部',
  LOCAL = '當地美食',
  RESTAURANT = '餐廳',
  SNACK = '小吃/甜點',
}

export type FoodSpot = {
  id: string;
  name: string;
  category: FoodCategory;
  description: string;
  location: string;
  googleMapsUrl: string;
  imageUrl: string;
};

export type CostData = {
  name: string;
  cost: number;
  time: number; // in minutes
};
