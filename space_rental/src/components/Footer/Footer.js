import React from "react";
import tw from "tailwind-styled-components";

const FooterContainer = tw.footer`
  w-screen
  h-32
  bg-slate-100
`;

const FooterWrap = tw.div`
  w-full
  max-w-7xl
  mx-auto
  my-0 
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>하단입니다~</FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
