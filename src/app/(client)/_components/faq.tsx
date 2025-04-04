

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqItems } from "@/constant/data";


function FaqItems() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                <AccordionItem
                    value={`item-${index}`}
                    key={index}
                    className="px-4 md:px-6 py-2 md:py-4 bg-[rgba(15, 15, 15, 1)] rounded-lg border border-white/20 my-2 cursor-pointer"
                >
                    <AccordionTrigger className="text-medium md:text-lg font-semibold tracking-wider group cursor-pointer">
                        <h1 className="flex text-left w-60 md:w-full text-white">
                            <span className="pr-2 md:pr-4 text-medium md:text-2xl text-brand-300 hidden md:block">
                                {" "}
                                0{index + 1}
                            </span>{" "}
                            <span className="group-hover:underline text-white">{item.question}</span>
                        </h1>
                    </AccordionTrigger>
                    <AccordionContent className="text-[14px] md:text-lg md:leading-7 md:px-10 text-white">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}


const FaqSection = () => {
    return (
        <div className="w-full flex flex-col gap-8 items-center h-full pb-4 max-w-screen-2xl mx-auto">
            <div id="faq" className="w-full flex items-start justify-center">
                <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-wide text-left select-none leading-9 md:leading-[4rem] w-72 md:w-full">
                    Frequently asked questions
                </h1>
            </div>
            <div className="w-full md:px-4">
                <FaqItems />
            </div>
        </div>
    );
};

export default FaqSection;
