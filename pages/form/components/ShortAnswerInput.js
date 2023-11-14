import React from "react";

import { useShortAnswerInput } from "react-google-forms-hooks";

export function ShortAnswerInput({ id }) {
  const { register } = useShortAnswerInput(id);

  return (
    <div>
      <input type="text" {...register()} className="w-full bg-black/10 py-2" />
    </div>
  );
}
