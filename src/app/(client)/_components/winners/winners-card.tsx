import {
    Card,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface WinnerCardProps {
    className?: string
    profileImage?: string
    name?: string
    ticketNumber?: string
    contestName?: string
    announcedAt?: string
}




const WinnerCard = ({
    className,
    profileImage,
    name,
    ticketNumber,
    contestName,
    announcedAt,
}: WinnerCardProps) => {
    return (
        <Card className={cn(className, "bg-transparent backdrop-blur-sm rounded-xl h-fit flex flex-col gap-5 items-center justify-start relative border-white/30 min-h-[50vh] pt-14")}>

            <Image src={profileImage || "/avtar.png"} alt="profile" width={100} height={100} className="w-16 h-16 rounded-full object-cover select-none" />
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl text-custom-blue font-semibold tracking-wide">Congratulations</h1>
                <p className="text-lg font-medium text-white text-center">
                {name}
                </p>
                <p className="text-[17px] font-medium text-white text-center">
                on winning <span className="text-custom-blue">{contestName}</span>
                </p>
            </div>
            <Image src="/domain/winner/icon.svg" alt="ellipse" width={100} height={100} className="absolute top-3 right-3 w-10 select-none pointer-events-none" />
        </Card>

    )
}

export default WinnerCard