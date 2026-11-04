'use client';
import { useState } from 'react';
import Checkbox from '../ui/checkbox';

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  return <Checkbox id='checkbox-demo' label='قبول قوانین' checked={checked} onChange={setChecked}></Checkbox> 
}
