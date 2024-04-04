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

export const ButtonWrap = tw.div`
  flex
  justify-center
  items-center
  mr-6
`;

export const Button = tw.button`
  bg-white
  ml-2
  px-8
  py-1.5
  rounded-full
  text-primary
  font-bold
  hover:bg-indigo-700
  hover:text-white
`;

export const QnaContainer = tw.div`
  bg-white
  px-8
  py-6
  rounded-lg
  my-6
`;

export const QnaWrap = tw.div`
  border-b-2
  border-solid
  border-gray-300
`;

export const QnaHeader = tw.div`
  flex
  justify-between
  p-3
`;

export const QnaContent = tw.div`
${(props) => props.expansed ? 'h-0 overflow-hidden' : 'h-auto p-3 overflow-auto'}
  bg-violet-200
`;

export const QnaContentBox = tw.div`
  flex
  mt-4
`;

export const QnaContentIcon = tw.div`
  w-7
  h-7
  rounded-full
  flex
  justify-center
  items-center
  font-semibold
  text-white
  p-2
`;

export const QnaContentText = tw.div`
  p-2
`;