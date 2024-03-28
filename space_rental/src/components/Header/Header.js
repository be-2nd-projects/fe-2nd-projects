import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Logo from "../../assets/images/logo.png";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FaKey } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const HeaderContainer = tw.header`
  w-full 
  h-16
  bg-white
  shadow-md
  flex
  items-center
  text-primary
  font-bold  
  sticky
  top-0
`;

const HeaderWrap = tw.div`
  w-full
  max-w-6xl
  flex
  items-center
  justify-between
  mx-auto
  my-0   
  
`;

const CenteredIconText = tw.div`
  flex flex-col items-center gap-1.5 pt-1.5
`;

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <HeaderContainer>
      <HeaderWrap>
        <div>
          <div className="logo">
            <img src={Logo} alt="logo" className="w-24" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          {loggedIn ? (
            <>
              <CenteredIconText>
                <FaKey className="w-5 h-5" />
                <div className="font-medium text-[6px]">호스트 센터</div>
              </CenteredIconText>
              <CenteredIconText>
                <IoHome className="w-5 h-5" />
                <div className="font-medium text-[6px]">마이페이지</div>
              </CenteredIconText>
              <CenteredIconText>
                <FiLogOut className="w-5 h-5" onClick={handleLogout} />
                <div className="font-medium text-[6px]">로그아웃</div>
              </CenteredIconText>
            </>
          ) : (
            <>
              <CenteredIconText>
                <FaKey className="w-5 h-5" />{" "}
                <div className="font-medium text-[6px]">호스트 센터</div>
              </CenteredIconText>
              <CenteredIconText>
                <FiLogIn className="w-5 h-5" onClick={handleLogin} />{" "}
                <div className="font-medium text-[6px]">로그인</div>
              </CenteredIconText>{" "}
            </>
          )}
        </div>
      </HeaderWrap>
    </HeaderContainer>
  );
}

export default Header;
