import tw from "tailwind-styled-components";

export const NavContainer = tw.div`
  w-full
  bg-white
  flex
  justify-between
  border-y-2 border-white-500 border-solid
`;

export const NavWrap = tw.ul`
  flex
`;

export const NavList = tw.li`
  p-5
  font-bold
  cursor-pointer
  hover:text-indigo-700
  ${(props) => props.selected ? 'text-indigo-700' : 'text-gray-400'}
`;

export const ButtonWrap = tw.div`
  flex
  justify-center
  items-center
  mr-6
`;

export const Button = tw.button`
  bg-primary
  ml-2
  px-8
  py-1.5
  rounded-full
  text-white
  hover:bg-indigo-700
`;