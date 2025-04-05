"use client"

import { MaxWidthWrapper } from '@/components/shared/max-wrapper'
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Features from './features'
import { AnimatedCursor } from '@/components/shared/cursor'
import Banners from './banners'
import { useRouter } from 'next/navigation'
import CtaSection from './cta'
import FaqSection from './faq'
import FooterSection from './footer'
import { ContestSection } from './contests/section'
import { TopWinnerSection } from './winners/section'

const LandingPageContent = () => {
    const router = useRouter()

    const redirectToLink = (link: string) => {
        router.push(link)
        window.scrollTo(0, 0)
    }

    return (
        <MaxWidthWrapper className='flex flex-col gap-6 relative max-h-screen min-h-screen w-full overflow-x-hidden'>
            {/* heo section */}
            <section className='w-full flex flex-col md:flex-row items-center gap-4 pt-28 md:pt-14 lg:pt-8 max-w-screen-2xl mx-auto min-h-screen lg:min-h-[90vh]'>
                <div className='w-full md:w-1/2 flex flex-col gap-6 md:pl-6 lg:pl-14 items-start relative'>
                    <h1 className='text-white text-5xl lg:text-6xl font-bold tracking-wide leading-[3rem] md:leading-[4rem]'>
                        Welcome to <br />
                        CryptoLuck
                    </h1>
                    <p className='text-white text-lg md:text-xl font-normal tracking-wide'>
                        Join the most exciting USDT-based lottery where luck meets blockchain technology!
                    </p>
                    <div className='flex items-center gap-3 md:gap-4 mt-3 md:mt-4'>
                        <Button className='w-40 md:w-48 active:scale-95 !h-12 md:!h-14 rounded-full bg-custom-blue hover:bg-custom-blue/80 text-white font-normal tracking-wide cursor-pointer group text-[16px]'>
                            Buy a ticket
                            <MoveRight className='size-5 shrink-0 group-hover:translate-x-1 transition' />
                        </Button>
                        <Button variant='ghost' className='text-white w-40 text-[16px] cursor-pointer !h-12 md:!h-14 rounded-full border-[1px] border-custom-blue active:scale-95 hover:bg-transparent hover:text-white'>
                            View Contest
                        </Button>
                    </div>
                    <div className="absolute -bottom-8 -left-8 z-20 hidden md:block">
                        <AnimatedCursor text={"try your luck"} />
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <Image src='/hero.svg' alt='landing page image' width={600} height={600} className='w-[90%] md:w-[80%] h-auto z-10 select-none pointer-events-none' />
                </div>
            </section>
            <Features />
            <Banners />
            <TopWinnerSection />
            <ContestSection />
            <CtaSection />
            <FaqSection />
            <FooterSection />
            <Image src={"/bg/e1.svg"} alt='ellipse' width={600} height={600} className='absolute top-0 right-0 w-[40%] select-none pointer-events-none' />
            <Image src={"/bg/e2.svg"} alt='ellipse' width={600} height={600} className='absolute top-0 left-8 w-[85%] select-none pointer-events-none' />
            <Image src={"/bg/e3.svg"} alt='ellipse' width={600} height={600} className='absolute -bottom-56 left-0 w-[35%] select-none pointer-events-none' />
        </MaxWidthWrapper>
    )
}

export default LandingPageContent