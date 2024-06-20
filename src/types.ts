// types.ts

export type RootStackParamList = {
    Login: undefined;
  Home: undefined;
  Signup: undefined;
  ProductDetails: { item: ProductData };
  };
  
  export type ProductData = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    };
  };
  