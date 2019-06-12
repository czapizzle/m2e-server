import {repository} from '@loopback/repository';
import {post, param, get, patch, del, requestBody} from '@loopback/rest';
import {Cart} from '../models';
import {CartRepository} from '../repositories';

export class CartController {
  constructor(
    @repository(CartRepository)
    public cartRepository: CartRepository,
  ) {}

  @post('/carts', {
    responses: {
      '200': {
        description: 'Cart model instance',
        content: {'application/json': {schema: {'x-ts-type': Cart}}},
      },
    },
  })
  async create(@requestBody() cart: Cart): Promise<Cart> {
    return await this.cartRepository.create(cart);
  }

  @get('/carts/{id}', {
    responses: {
      '200': {
        description: 'Cart model instance',
        content: {'application/json': {schema: {'x-ts-type': Cart}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Cart> {
    return await this.cartRepository.findById(id);
  }

  @patch('/carts/{id}', {
    responses: {
      '204': {
        description: 'Cart PATCH success',
        content: {'application/json': {schema: {'x-ts-type': Cart}}},
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() cart: Cart,
  ): Promise<void> {
    await this.cartRepository.updateById(id, cart);
  }

  @del('/carts/{id}', {
    responses: {
      '204': {
        description: 'Cart DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cartRepository.deleteById(id);
  }
}
