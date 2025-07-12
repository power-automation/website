"use client";
import Image from 'next/image';
export default function Navbar() {
  return (
    <div className="bg-amber-500/70 text-white border-b-1 border-neutral-700">
      <div className="flex items-center md:hidden">        
        <Image src="/logo.png" alt="Logo" width={60} height={40} className='rounded-full my-5 ml-5' />
        <div className='text-2xl p-3 w-[90%] text-center font-bold'>Power Automation</div>  
      </div>
      <div className={`hidden md:flex justify-between items-center`}>
        <div className='flex flex-row items-center mx-5'>
          <Image src="/logo.png" alt="Logo" width={60} height={40} className='rounded-full my-5' />
          <div className='text-2xl p-3 font-bold'>Power Automation</div>
        </div>
      </div>
    </div>  
  );
}
