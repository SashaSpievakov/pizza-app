import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ICartItem } from "../../models/ICartItem";
import {
  addItem,
  CartItemForDelete,
  removeItem,
  selectCartItemById,
} from "../../redux/slices/cartSlice";
import { ButtonAdd } from "../Buttons/Buttons.styled";
import {
  Block,
  Li,
  Image,
  Title,
  Selector,
  Bottom,
  Price,
  Counter,
  Minus,
  Plus,
  Count,
  MainPlus,
} from "./ItemCard.styled";

interface ItemCardProps {
  id: string;
  name: string;
  price: number;
  sizes: number[];
  types: number[];
  count: number;
}

const typeNames: string[] = ["traditional", "thin"];
const sizeNames: number[] = [12, 14, 16];

const ItemCard = ({ id, name, price, sizes, types, count }: ItemCardProps) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(selectCartItemById(id));
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const refType = useRef<HTMLLIElement>(null);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: ICartItem = {
      id,
      name,
      price,
      size: sizeNames[activeSize],
      type: typeNames[activeType],
      count: 0,
    };
    dispatch(addItem(item));
  };

  const onClickRemove = () => {
    const item: CartItemForDelete = {
      id,
      price,
      count,
    };
    dispatch(removeItem(item));
  };

  return (
    <Block>
      <Link to={`/item/${id}`}>
        <Image src={`./assets/img/pizza${id}.png`} alt="Pizza" />
        <Title>{name}</Title>
      </Link>
      <Selector>
        <ul>
          {types.map((type) => (
            <Li
              ref={refType}
              key={type}
              onClick={() => setActiveType(type)}
              chosen={activeType === types.indexOf(type)}
            >
              {typeNames[type]}
            </Li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <Li
              key={size}
              onClick={() => setActiveSize(i)}
              chosen={activeSize === i}
            >
              {size} inch
            </Li>
          ))}
        </ul>
      </Selector>
      <Bottom>
        <Price>{price}$</Price>
        {addedCount ? (
          <Counter>
            <Minus onClick={onClickRemove} />
            <Count>{addedCount}</Count>
            <Plus onClick={onClickAdd} />
          </Counter>
        ) : (
          <ButtonAdd onClick={onClickAdd}>
            <MainPlus />
            <span>Add</span>
          </ButtonAdd>
        )}
      </Bottom>
    </Block>
  );
};
export default ItemCard;
