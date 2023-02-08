import { IPizzaItem } from '../../../models/IPizzaItem';

export const mockItems: IPizzaItem[] = [
  {
    id: '3',
    name: 'Srimp Pizza',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam vel eos cum ullam sed, officiis cupiditate autem. Illo, ipsam dolorem! Minus qui sequi reiciendis ipsa dolor eligendi laudantium nihil iusto libero illum commodi esse nulla velit, corporis sint. Illo laborum optio nostrum qui. Laboriosam ipsum ullam, velit itaque iure officia',
    types: [0, 1],
    sizes: [12, 14, 16],
    price: 10,
    category: 3,
    rating: 6,
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid porro sequi ducimus, vel consequuntur modi, eaque quo ratione a assumenda numquam, aperiam odit illo. Impedit, dolores quae mollitia saepe ad ipsa temporibus in pariatur corporis facere ipsam repellendus iste neque quis repudiandae sequi aliquid ab dolorem consectetur vero, dicta commodi',
    types: [0],
    sizes: [12, 14],
    price: 12,
    category: 1,
    rating: 13,
  },
  {
    id: '6',
    name: 'Diablo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid porro sequi ducimus, vel consequuntur modi, eaque quo ratione a assumenda numquam, aperiam odit illo. Impedit, dolores quae mollitia saepe ad ipsa temporibus in pariatur corporis facere ipsam repellendus iste neque quis repudiandae sequi aliquid ab dolorem consectetur vero, dicta commodi',
    types: [0, 1],
    sizes: [12, 16],
    price: 15,
    category: 4,
    rating: 16,
  },
];

export const mockItem: IPizzaItem = {
  id: '9',
  name: 'Chicken Curry',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nisi aspernatur debitis quod suscipit, vitae placeat natus ipsum inventore esse rerum animi facere numquam saepe vero mollitia quibusdam at voluptates est commodi laudantium? Iste inventore quibusdam cupiditate nemo sint iusto minus nihil culpa! Sequi architecto nesciunt explicabo mollitia. Laboriosam, odio.',
  types: [0, 1],
  sizes: [12, 14, 16],
  price: 14,
  category: 3,
  rating: 15,
};
