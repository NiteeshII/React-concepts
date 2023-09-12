import React, { useRef } from "react";
import useLocalStorage from "../CustomHooks/useLocalStorage";
import useUpdateLogger from "../CustomHooks/useUpdateLogger";
import useToggle from "../CustomHooks/useToggle";
import Usememo from "./useMemo";
import Usetransition from "./useTransition";

const Input = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [value, toggleValue] = useToggle(false);
  useUpdateLogger(name);
  const callbackRef = useRef(() => setName("name", "niteesh"));
  console.log(callbackRef);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <div>{value.toString()}</div>
        <button onClick={() => toggleValue((currvalue) => !currvalue)}>
          Toggle
        </button>
        <button onClick={() => toggleValue(true)}>Make True</button>
        <button onClick={() => toggleValue(false)}>Make False</button>
      </div>
      <Usememo />
      <Usetransition />
    </div>
  );
};

export default Input;
