import tw from "tailwind-styled-components";

export const SummaryContainer = tw.div`
  mt-9
  pb-4
`;

export const TitleWrap = tw.div`
flex mt-4 mb-8 text-white text-4xl font-bold
`;

export const Category = tw.span`
  text-sm
  text-white
  px-3
  py-1
  border-white
  border-solid
  border-2
  rounded-full
`;

export const InfoWrap = tw.ul`
  flex
  text-white
  text-lg
  my-2
  flex-wrap
`;

export const InfoSubTitle = tw.li`
  font-bold
  text-xl
  mr-3
`;


export const InfoOptionValue = tw.li`
  px-3 
  py-1
  border-white
  border-solid
  border-2
  rounded-full
  flex
  justify-center
  items-center
  mr-2
  mb-2
`;