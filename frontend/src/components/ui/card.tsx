'use client';
import type { ReactNode } from "react";
export default function Card({children}:{children:ReactNode}) {
  
  return(
    <div className="bg-surface text-foreground border border-border rounded-2xl p-4">
      {children}
    </div>
  )
  
}
