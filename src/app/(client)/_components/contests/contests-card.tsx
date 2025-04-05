import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ShoppingBag, Ticket } from "lucide-react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { MdAddShoppingCart } from "react-icons/md";
import React from 'react'

interface ContestCardProps {
    className?: string
    profileImage?: string
    title?: string
    price?: string
    raffleNo?: string
    marketProgress?: number
    ticketsRemaining?: string
}

const ContestCard = ({
    className,
    profileImage = "/domain/contest/demo.png",
    title = "Billionaire Watch",
    price = "12 MSC | 12.00 USD",
    raffleNo = "112233445566778",
    marketProgress = 10,
    ticketsRemaining = "90%",
}: ContestCardProps) => {
    return (
        <Card className={cn(className, "w-full bg-transparent backdrop-blur-sm rounded-xl h-fit flex flex-col gap-2 items-center justify-start relative border-white/40 min-h-[50vh] p-2 ")}>
            <Image src={profileImage} alt="contest item" width={100} height={100} className="w-full object-cover select-none rounded-lg" />
            <div className="flex flex-col gap-3 w-full pb-2">
                <div className="w-full h-9 flex items-center justify-between bg-custom-blue rounded-sm px-2">
                    <p className="text-white text-sm">
                        {title}
                    </p>
                    <p className="text-white text-sm">
                        {price}
                    </p>
                </div>
                <div className="w-full flex items-center justify-between px-2">
                    <p className="text-white text-xs">
                        Raffle No: {raffleNo}
                    </p>
                    <Image src="/domain/contest/ticket.svg" alt="ticket" width={100} height={100} className="size-6 shrink-0 object-cover select-none" />
                </div>
                <div className="w-full flex flex-col gap-1 items-start justify-center px-2 -mt-2 mb-2">
                    <p className="text-white text-sm">
                        Market
                    </p>
                    <div className="flex flex-col gap-1 w-full">
                        <h1 className="text-sm text-white">
                            {ticketsRemaining} <span className="text-xs">Ticket Remaining</span>
                        </h1>
                        <Progress value={marketProgress} className="w-full bg-white" />
                    </div>
                </div>
                <Button className="bg-custom-blue hover:bg-custom-blue/80 w-full h-10 rounded-md text-white font-normal tracking-wide cursor-pointer group text-[16px] flex items-center justify-center gap-2">
                    Add To Cart
                    <MdAddShoppingCart className="size-5 shrink-0" />
                </Button>
            </div>
        </Card>
    )
}

export default ContestCard