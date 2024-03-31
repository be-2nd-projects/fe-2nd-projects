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