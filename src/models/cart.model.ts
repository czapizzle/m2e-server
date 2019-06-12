import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Cart extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  items?: object[];

  @property({
    type: 'string',
  })
  user_id: string;

  @property({
    type: 'boolean',
  })
  discount: boolean;

  @property({
    type: 'number',
  })
  total: number;

  constructor(data?: Partial<Cart>) {
    super(data);
  }
}

export interface CartRelations {
  // describe navigational properties here
}

export type CartWithRelations = Cart & CartRelations;
