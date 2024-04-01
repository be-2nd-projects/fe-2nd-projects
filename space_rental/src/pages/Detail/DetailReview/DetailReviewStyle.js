import tw from "tailwind-styled-components";

export const SectionContainer = tw.div`
  relative
  pb-8
  border-b
  border-solid
  border-white
`;

export const SectionTitle = tw.div`
  before:block
  before:absolute
  before:w-[5px]
  before:h-[26px]
  before:bg-white
  before:absolute
  before:top-50%
  before:left-0
  before:-translate-x-1/2

  text-white
  font-bold
  text-2xl
  my-6
  ml-2
`;

export const CardContainer = tw.div`
  bg-white
  px-8
  py-6
  rounded-lg
  my-6
`;

export const ProfileWrap = tw.div`
  w-16
  h-16
  rounded-full
  flex
  justify-center
  items-center
  bg-gray-400
`;

export const StarWrap = tw.div`
  flex
  items-center
`;

export const ScoreWrap = tw.div`
  font-bold
  ml-1
  mt-1
`;

export const ReviewContent = tw.div`
  text-sm
`;

export const ReviewDate = tw.div`
  text-gray-500 
  my-2
`;

export const ReviewImgWrap = tw.div`
  basis-1/6
  mr-4
  my-2
  rounded-lg
`;