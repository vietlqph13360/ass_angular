export type Product = {
  _id: string,
  name: string,
  price:number,
  description:string,
  image:string,
  category:string
};

export type ProductCreate = {
  name: string,
  price:number,
  description:string,
  image:string,
  category:string
};
