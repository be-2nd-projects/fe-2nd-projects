import tw from "tailwind-styled-components";

export const CardsWrap = tw.div`
  flex
  flex-wrap
  mt-8
`;

export const CardItem = tw.div`
  w-[270px]
  mx-2
  my-5
  `;

export const ImgWrap = tw.div`
  rounded-xl
  flex 
  justify-center
  align-center
`;

export const Img = tw.img`
  max-w-full
  max-h-full
  rounded-xl
`;

export const ListInfoLeft = tw.div`
  w-3/5
  mr-2
`;

export const Title = tw.p`
  text-2xl
  font-bold
  text-white
`;

export const Category = tw.span`
  text-xs
  text-white
  px-3
  py-1
  border-white
  border-solid
  border-2
  rounded-full
`;

export const ListInfoRight = tw.div`
  w-2/5
  flex
  flex-col
  justify-between
  items-end
`;