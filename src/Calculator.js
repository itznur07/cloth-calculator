import React, { useState } from "react";

function Calculator() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    let subTotal = (input3 / 16) * input2 + input3 * input1;
    setResult(subTotal);

    setInput1("");
    setInput2("");
    setInput3("");
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="w-72 bg-[#370031] font-bold text-white text-center px-5 py-2.5 border shadow-md  outline-none text-xl rounded m-2">
        হাকিকত শাড়ি বিতান
      </div>
      <div className="text-2xl font-medium text-[#370031] my-5">
        মোট দাম: {result.toLocaleString("bn-BD")}
      </div>
      <input
        type="number"
        value={input1}
        className="p-2 border border-[#370031] focus:border-[orange] outline-none rounded m-2"
        placeholder="কত গজ"
        onChange={(e) => setInput1(Number(e.target.value))}
      />
      <input
        type="number"
        value={input2}
        className="p-2 border border-[#370031] focus:border-[orange] outline-none rounded m-2"
        placeholder="কত গিরা"
        onChange={(e) => setInput2(Number(e.target.value))}
      />
      <input
        type="number"
        value={input3}
        className="p-2 border border-[#370031] focus:border-[orange] outline-none rounded m-2"
        placeholder="প্রতি গজের দাম"
        onChange={(e) => setInput3(Number(e.target.value))}
      />
      <button
        className="px-5 py-2 bg-[#370031]  hover:bg-[orange] text-white font-bold border outline-none  rounded m-2"
        onClick={handleCalculate}
      >
        হিসাব করুন
      </button>
    </div>
  );
}

export default Calculator;
