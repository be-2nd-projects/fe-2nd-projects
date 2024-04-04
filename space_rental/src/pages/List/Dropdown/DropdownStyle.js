import tw from "tailwind-styled-components";

export const DropdownWrap = tw.div`
  flex
  flex-col
  items-end
  justify-end
  relative
`;

export const DropdownButton = tw.button`
  flex
  items-center
  justify-center
  w-32
  bg-white
  p-3
  text-sm
  rounded
  font-bold
`;

export const DropdownListWrap = tw.ul`
  w-32
  bg-white
  mt-2
  p-3
  rounded
  absolute
  top-[44px]
`;

export const DropdownList = tw.li`
  p-2
  text-sm
  cursor-pointer
`;