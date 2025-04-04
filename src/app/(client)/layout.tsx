import Navbar from "@/components/shared/navbar";


export default function Clientlayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full h-full bg-black scroll-smooth relative">
            <Navbar />
            {children}
        </main>
    );
}
