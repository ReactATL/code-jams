import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
const DropDownComponent = ({ type }: { type: string }) => {
  const [conversionName, setConversionName] = useState("");
  return (
    <button className="w-full h-[50px] border shadow-lg flex items-center justify-between px-7">
      <span>{conversionName === "" ? type : conversionName}</span>
      <TiArrowSortedDown size={30} />
    </button>
  );
};

export default DropDownComponent;
