import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import React from "react";
import WinnerCard from "./winners-card";
import Image from "next/image";

const winnersData = [
  {
    id: 1,
    profileImage: "/avtar.png",
    name: "Suman",
    contestName: "Contest 3",
  },
  {
    id: 2,
    profileImage: "/avtar.png",
    name: "Nilanjan",
    contestName: "Contest 5",
  },
  {
    id: 3,
    profileImage: "/avtar.png",
    name: "Suptika",
    contestName: "Contest 2",
  },
  {
    id: 4,
    profileImage: "/avtar.png",
    name: "Agniva",
    contestName: "Contest 7",
  },
];

const TopWinnerSection = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto flex flex-col gap-8 h-fit py-6">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-left text-white">
          Top Winners
        </h1>
        <Button className="w-36 lg:w-44 active:scale-95 !h-10 lg:!h-13 rounded-full bg-custom-blue hover:bg-custom-blue/80 text-white font-normal tracking-wide cursor-pointer group text-[16px]">
          View All
          <MoveRight className="size-5 shrink-0 group-hover:translate-x-1 transition" />
        </Button>
      </div>
      <div className="w-full grid grid-cols-3 md:grid-cols-9 lg:grid-cols-12 gap-5">
        {winnersData.map((winner) => (
          <WinnerCard
            key={winner.id}
            className="col-span-3"
            profileImage={winner.profileImage}
            name={winner.name}
            contestName={winner.contestName}
          />
        ))}
      </div>
    </div>
  );
};

export default TopWinnerSection;
