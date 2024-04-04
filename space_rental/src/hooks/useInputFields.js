import { useState } from "react";

export const useInputFields = () => {
  const [inputs, setInputs] = useState([{ dayTime: "", range: "", price: "" }]);

  const addInput = () => {
    setInputs([...inputs, { dayTime: "", range: "", price: "" }]);
  };

  return [inputs, addInput];
};
