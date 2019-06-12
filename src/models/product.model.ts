import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  sku: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
    id: true,
  })
  slug: string;

  @property({
    type: 'string',
  })
  image: string;

  @property({
    type: 'string',
  })
  category: string;

  @property({
    type: 'string',
  })
  description: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
    default: 0,
  })
  stock: number;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
