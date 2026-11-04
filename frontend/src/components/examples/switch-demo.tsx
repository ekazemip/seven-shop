'use client';
import { useState } from 'react';
import Switch from '@/components/ui/switch'
export default function SwitchDemo() {
  const [checked, setChecked] = useState(false);
  return <Switch checked={checked} onChange={setChecked} label='فقط کالاهای موجود' id='switch-demo'></Switch>
}
