import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const CtaSection = () => {
    return (
        <div className="w-full max-w-screen-2xl mx-auto flex min-h-[45vh] md:min-h-[40vh] bg-custom-blue rounded-xl my-2 md:my-6 opacity-90 relative overflow-hidden items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center px-5 md:px-10 z-50 gap-3 md:gap-5">
                <h1 className="text-white text-2xl md:text-4xl font-semibold tracking-wide text-left select-none">
                    Subscribe to our newsletter
                </h1>
                <div className="w-80 md:w-90 flex items-center justify-between gap-4 relative">
                    <Input className='h-10 md:h-12 rounded-xl placeholder:text-white placeholder:text-sm text-sm text-white' placeholder='enter your email address' />
                    <Button className='absolute right-0 top-0 !h-10 md:!h-12 rounded-r-xl rounded-l-none'>
                        Subscribe
                    </Button>
                </div>
                <p className="text-[15px] md:text-[17px] font-normal text-white select-none text-left md:text-center">
                    Stay ahead with the latest updates—subscribe to our <br className='hidden md:block' /> newsletter now!
                </p>
            </div>

            <div className="absolute top-1 left-0 hidden md:block">
                <Image
                    src={"/domain/carrers/cta1.svg"}
                    alt="cta1"
                    width={130}
                    height={150}
                    className="select-none object-cover"
                />
            </div>
            <div className="absolute -top-0 -right-0  md:hidden">
                <Image
                    src={"/domain/carrers/cta3.svg"}
                    alt="cta1"
                    width={500}
                    height={500}
                    className="select-none object-cover w-56"
                />
            </div>
            <div className="absolute -top-2 -right-1 hidden md:block">
                <Image
                    src={"/domain/carrers/cta2.svg"}
                    alt="cta1"
                    width={500}
                    height={500}
                    className="select-none object-cover"
                />
            </div>
        </div>
    )
}

export default CtaSection