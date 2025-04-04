import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Wallet } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='fixed h-20 bg-trnasparent w-full z-20 inset-x-0 top-0 flex items-center justify-between px-12 backdrop-blur-sm'>
            <div className='flex items-center justify-center cursor-pointer'>
                <Image src='/logo.svg' alt='logo' width={100} height={100} className='w-14 h-auto' />
            </div>
            <div className='flex items-center gap-3'>
                <Button variant={"ghost"} className='border active:scale-95 border-white !h-10 rounded-full text-white w-40 hover:bg-transparent hover:text-white cursor-pointer'>
                    <Wallet className='text-white size-4 shrink-0' /> Connect Wallet
                </Button>
                <Button variant={"ghost"} className='bg-[#6368E9] active:scale-95 !h-10 rounded-full text-white w-20 hover:bg-[#6368E9] hover:text-white cursor-pointer'>
                    Log In
                </Button>
            </div>
        </nav>
    )
}

export default Navbar