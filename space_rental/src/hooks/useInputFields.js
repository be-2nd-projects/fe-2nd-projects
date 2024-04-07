import { useState } from "react";

export const useInputFields = () => {
  const [inputs, setInputs] = useState([{ dayTime: "", range: "", price: "" }]);

  const addInput = () => {
    setInputs([...inputs, { dayTime: "", range: "", price: "" }]);
  };

  const updateInput = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const deleteInput = (indexToDelete) => {
    if (indexToDelete === 0) {
      // 첫 번째 줄인 경우
      const updatedInputs = inputs.map((input, index) => {
        if (index === 0) {
          return { dayTime: "", range: "", price: "" }; // 첫 번째 줄의 input 필드만 비움
        }
        return input;
      });
      setInputs(updatedInputs);
    } else {
      // 첫 번째 줄이 아닌 경우
      const updatedInputs = inputs.filter(
        (input, index) => index !== indexToDelete
      );
      setInputs(updatedInputs);
    }
  };

  return [inputs, setInputs, addInput, updateInput, deleteInput];
};
