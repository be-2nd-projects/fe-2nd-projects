import React from "react";
import tw from "tailwind-styled-components";

const FooterContainer = tw.footer`
  w-screen
  h-32
  bg-[#F7f7f7]
  mt-28
  fixed bottom-0
`;

const FooterWrap = tw.div`
  w-full
  max-w-6xl
  mx-auto
  my-0 
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>고객센터</FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
