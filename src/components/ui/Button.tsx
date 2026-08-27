import React from 'react';

function Button({ children, color, textColor }: { children: React.ReactNode; color: string; textColor: string }) {
  return <button className={`bg-[#313131] text-[#FFBD7F] `}>{children}</button>;
}

export default Button;
