import React from "react";
import tw from "tailwind-styled-components";
import Logo from "../../assets/images/logo.png";
import { FiLogIn } from "react-icons/fi";

const HeaderContainer = tw.header`
  w-full
  h-16
  bg-white
  shadow-md
  flex
  items-center
  text-primary
  font-GmarketSansMedium 
  font-bold
  `;

const HeaderWrap = tw.div`
  w-full
  max-w-7xl
  flex
  items-center
  justify-between
  px-4
  mx-auto
  my-0
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <div>
          <div className="logo">
            <img src={Logo} alt="logo" className="w-24" />
          </div>
        </div>
        <div className="flex">
          <div>고객센터</div>
          <FiLogIn />
        </div>
      </HeaderWrap>
    </HeaderContainer>
  );
}

export default Header;
