import tw from "tailwind-styled-components";

export const DropdownWrap = tw.div`
  flex
  flex-col
  items-end
  justify-end
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
`;

export const DropdownListWrap = tw.ul`
  w-32
  bg-white
  mt-2
  p-3
  rounded
`;

export const DropdownList = tw.li`
  p-2
  text-sm
  cursor-pointer
`;