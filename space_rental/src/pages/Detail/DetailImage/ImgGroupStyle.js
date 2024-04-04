import tw from "tailwind-styled-components";

export const ImgGroupContainer = tw.div`
  flex
  gap-x-2
  gap-y-1
  mt-9
`;

export const BigImgGroupWrap = tw.div`
  flex-1
`;

export const SmallImgGroupWrap = tw.div`
  flex-1
  grid
  grid-rows-2
  grid-cols-2
  gap-x-2
  gap-y-1
`;

export const Img = tw.img`
  max-w-full
  max-h-full
`;