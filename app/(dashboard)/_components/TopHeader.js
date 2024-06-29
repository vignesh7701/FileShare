import { AlignJustify } from 'lucide-react'
import Image from "next/image";
import React from 'react'


function TopHeader() {
  return (
    <div className="flex p-4  md:p-0 border-b items-center justify-between md:justify-end">
      <AlignJustify className="md:hidden" />
      <Image  src="/logo.svg" alt="logo" width={65} height={60} className='md:hidden' />
    </div>
  );
}

export default TopHeader