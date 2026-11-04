'use client';
import { useState } from "react";
import QuantitySelector from "../ui/quantity-selector";

export default function QuantityDemo(){
  const [quantity,setQuantity] = useState(1);
  return(
    <QuantitySelector value={quantity} onChange={setQuantity}></QuantitySelector>
  )
}
