'use client';
import { useState } from "react";
import Chip from "../ui/chip";

export default function ChipDemo() {
  const [selected,setSelected]=useState(false)
  function Handler() {
    setSelected(previous=> !previous)
  }
  return(
    <Chip selected={selected} onClick={Handler}>یخچال</Chip>
  )
}
