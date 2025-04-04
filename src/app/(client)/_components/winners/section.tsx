import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import React from 'react'
import WinnerCard from './winners-card'
import Image from 'next/image'

const TopWinnerSection = () => {
    return (
        <div className='w-full max-w-screen-2xl mx-auto flex flex-col gap-8 h-fit py-6'>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-3xl md:text-5xl font-semibold text-center text-white'>Top Winners</h1>
                <Button className='w-44 active:scale-95 !h-13 rounded-full bg-custom-blue hover:bg-custom-blue/80 text-white font-normal tracking-wide cursor-pointer group text-[16px]'>
                    View All
                    <MoveRight className='size-5 shrink-0 group-hover:translate-x-1 transition' />
                </Button>
            </div>
            <div className='w-full grid grid-cols-12 gap-5'>
                <WinnerCard className='col-span-4' />
            </div>
        </div>
    )
}

export default TopWinnerSection