import tw from "tailwind-styled-components";

export const TitleWrap = tw.div`
  pt-[120px]
  pb-14
`;

export const Title = tw.h1`
  text-7xl
  text-white
  font-bold
  animate-[wiggle_1s_ease-in-out_infinite]
`;

export const DropDownWrap = tw.div`
  flex
  flex-col
  items-end
  justify-end
`;

export const DropDownButton = tw.button`
  flex
  items-center
  justify-center
  w-32
  bg-white
  p-3
  text-sm
  rounded
`;

export const DropDownListWrap = tw.ul`
  w-32
  bg-white
  mt-2
  p-3
  rounded
`;
