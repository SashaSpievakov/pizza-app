import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import mainLogo from "../../assets/img/main-logo.svg";
import { selectCart } from "../../redux/slices/cartSlice";
import { setTheme, selectIsLight } from "../../redux/slices/themeSlice";
import { Main, Wrapper, Logo, Right, Icon, Delimiter } from "./Header.styled";
import { ButtonCart } from "../Buttons/Buttons.styled";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header: React.FC = () => {
  const {itemsCount, totalPrice} = useSelector(selectCart);
  const isLight = useSelector(selectIsLight);
  const dispatch = useDispatch();
  const location = useLocation();

  const changeThemes = () => {
    dispatch(setTheme(isLight ? false : true))
  }

  return (
    <Main>
      <Wrapper>
        <Link to="/">
          <Logo>
            <img width="38" src={mainLogo} alt="Pizza logo" />
            <div>
              <h1>Pizza Place</h1>
              <p>the most delicious pizzas in town</p>
            </div>
          </Logo>
        </Link>
        {location.pathname !== "/cart" && (
          <Right>
            <Icon as={isLight ? BsFillMoonFill : BsFillSunFill} onClick={changeThemes} />
            <ButtonCart to="/cart" as={Link}>
              <span>{totalPrice} $</span>
              <Delimiter/>
              <BsCart3 />
              <span>{itemsCount}</span>
            </ButtonCart>
          </Right>
        )}
      </Wrapper>
    </Main>
  )
}
export default Header