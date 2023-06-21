import { useState } from "react";

export const useForm = (second = {}) => {
  const [valores, setvalores] = useState(second);

  const reset = () => {
    setvalores(second);
  };

  const handleFormulario = (target) => {
    setvalores({
      ...valores,
      [target.name]: target.value,
    });

    console.log(valores);
  };

  return [valores, handleFormulario, reset];
};
