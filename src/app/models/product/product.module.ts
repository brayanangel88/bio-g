export interface ProductModel {
    id: number;
    code: string;
    name: string;
    description: string;
    imageUrl?: string|null;
    price: number;
    dateCreated: string;
    dateUpdated: string;
    user: string;
  }
  