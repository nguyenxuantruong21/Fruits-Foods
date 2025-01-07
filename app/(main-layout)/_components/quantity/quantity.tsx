"use client";

import { Minus, Plus } from "lucide-react";
import { useLayoutEffect, useState } from "react";

const Quantity = ({
  value = 1,
  onChange,
}: {
  value?: number;
  onChange?: (value: number) => void;
}) => {
  const [quantity, setQuantity] = useState<number>(value);

  /* handle change input and check input is number */
  const handleInput = (e: React.KeyboardEvent) => {
    const allowKey = ["Backspace", "Delete"];
    const pattern = /[0-9]/;
    const key = e.key;
    if (pattern.test(key) || allowKey.includes(key)) return true;
    e.preventDefault();
  };

  /* handle decrement quantity */
  const handleMinus = () => {
    setQuantity(quantity - 1);
    if (typeof onChange === "function") {
      onChange(quantity - 1);
    }
  };

  /* handle increment quantity */
  const handlePlus = () => {
    setQuantity(quantity + 1);
    if (typeof onChange === "function") {
      onChange(quantity + 1);
    }
  };

  /* handle set default quantity when quantity < 1 */
  useLayoutEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);

  return (
    <div className="flex gap-5 items-center mb-5">
      <button
        onClick={handleMinus}
        className="p-2 border-[3px] border-primaryColor rounded-full"
      >
        <Minus className="cursor-pointer" size={15} />
      </button>
      <input
        type="text"
        className="bg-[#efefef] w-[50px] p-3 text-center rounded-xl"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        onKeyDown={handleInput}
      />
      <button
        onClick={handlePlus}
        className="p-2 border-[3px] border-primaryColor rounded-full"
      >
        <Plus className="cursor-pointer" size={15} />
      </button>
    </div>
  );
};

export default Quantity;
