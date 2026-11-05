import type { ReactNode } from 'react';
import SvgCheckIcon from '../icons/check-icon';
import SvgBellIcon from '../icons/bell-icon';
import SvgCloseIcon from '../icons/close-icon';
import SvgAlertIcon from '../icons/alert-icon';
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
    variantIcon = <SvgCheckIcon className="size-6 shrink-0" />
  }else if(variant === 'warning'){
    variantClasses = 'bg-warning-soft text-warning'
    variantIcon = <SvgBellIcon className="size-6 shrink-0"/>
  }else if(variant === 'danger'){
    variantClasses = 'bg-danger-soft text-danger'
    variantIcon = <SvgCloseIcon className="size-6 shrink-0"/>
  }else{
    variantClasses= 'bg-info-soft text-info'
    variantIcon = <SvgAlertIcon className="size-6 shrink-0"/>
  }return(
    <div className={`flex items-start gap-3 rounded-xl p-2 text-body-sm border ${variantClasses} `} >
      {variantIcon}
      {children}
      </div>
  )
}
