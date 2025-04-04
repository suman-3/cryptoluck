"use client"
import Image from 'next/image'
import { useState } from 'react'

const features = [
    {
        title: "Instant Payouts",
        description: "Winners get their prizes immediately in USDT.",
        icon: "/features/1.svg"
    },
    {
        title: "Secure & Transparent ",
        description: "Blockchain-based and completely fair draws.",
        icon: "/features/2.svg"
    },
    {
        title: "Global Access",
        description: "Play from anywhere, at any time.",
        icon: "/features/3.svg"
    },
    {
        title: "Multiple Contests",
        description: "More chances to win exciting prizes!",
        icon: "/features/4.svg"
    },
]

const Features = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className='flex items-center justify-between gap-6 w-full max-w-screen-2xl mx-auto'>
            {features.map((feature, index) => (
                <div
                    className='w-fit h-full flex items-center gap-2 rounded-xl bg-[#3E3E3E40]/60 px-4 py-3 cursor-pointer backdrop-blur-sm transition-all duration-300 hover:bg-[#3E3E3E60]/80'
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className='w-14 h-14 flex items-center justify-center'>
                        <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={100}
                            height={100}
                            className={`w-14 h-auto object-cover pointer-events-none transition-transform duration-200 ${hoveredIndex === index ? 'rotate-12' : ''}`}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-white text-md font-medium tracking-wide'>{feature.title}</h2>
                        <p className='text-white text-xs'>
                            {feature.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Features