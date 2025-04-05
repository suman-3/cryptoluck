"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { AlignRight, Wallet } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { CustomConnectButton } from './ConnectButton.Custom'

const Navbar = () => {
    const router = useRouter()
    const handleLogoClick = () => {
        router.push('/')
    }

    const handleLoginClick = () => {
        router.push('/auth/login')
    }


    return (
        <nav className='fixed h-14 md:h-20 bg-trnasparent w-full z-20 inset-x-0 top-0 flex items-center justify-between px-6 md:px-8 lg:px-12 backdrop-blur-sm'>
            <div className='flex items-center justify-center cursor-pointer gap-14 lg:gap-20'>
                <Image
                    onClick={handleLogoClick}
                    src='/logo.svg' alt='logo' width={100} height={100} className='w-10 md:w-14 h-auto' />
                <div className='items-center gap-10 justify-center hidden md:flex'>
                    <Link href={"/"} className='text-sm lg:text-[17px] font-normal tracking-wide text-white'>
                        Winners
                    </Link>
                    <Link href={"/"} className='text-sm lg:text-[17px] font-normal tracking-wide text-white'>
                        Contests
                    </Link>
                </div>
            </div>
            <div className='flex items-center gap-3'>
            <CustomConnectButton />
                <Button
                    onClick={handleLoginClick}
                    variant={"ghost"} className='bg-[#6368E9] active:scale-95 !h-10 rounded-full text-white w-24 hover:bg-[#6368E9] hover:text-white cursor-pointer'>
                    Log In
                </Button>
            </div>
            <div className='md:hidden flex items-center justify-center'>
                <AlignRight className='text-white size-5 cursor-pointer shrink-0' />
            </div>
        </nav>
    )
}

export default Navbar