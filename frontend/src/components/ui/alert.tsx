import type { ReactNode } from 'react';
import Image from 'next/image';
export default function Alert({
  children,
  variant = 'info',
}: {
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'danger';
}) {
  let variantClasses;
  let variantIcon;
  if (variant === 'success') {
    variantClasses = 'bg-success-soft text-success'
    variantIcon = 'check'
  }else if(variant === 'warning'){
    variantClasses = 'bg-warning-soft text-warning'
    variantIcon = 'bell'
  }else if(variant === 'danger'){
    variantClasses = 'bg-danger-soft text-danger'
    variantIcon = 'close'
  }else{
    variantClasses= 'bg-info-soft text-info'
    variantIcon = 'alert'
  }return(
    <div className={`flex items-start gap-3 rounded-xl p-2 text-body border ${variantClasses} `} >
      <Image className='shrink-0' src={`/images/brand/${variantIcon}.svg`} width={19} height={54} alt="خطا"></Image>
      {children}
      </div>
  )
}
