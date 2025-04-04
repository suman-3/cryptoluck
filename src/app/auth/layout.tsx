import BackgroundPattern from "@/components/ui/background-pattern";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Authentication | CryptoLuck",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full h-full flex md:flex-row flex-col overflow-hidden">
      <div className="w-1/2 hidden md:flex relative h-full flex-col  text-white dark:border-r lg:flex bg-muted min-h-screen auth-bg px-6 py-5">
        <div className="auth-bg absolute inset-0" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent opacity-50" />
        <Link
          href={"/"}
          className="relative z-20 flex items-center text-lg font-medium"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="w-20"
          />
        </Link>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-6">
            <p className="text-lg">
              Welcome to the CryptoLuck authentication page. Please log in or
              sign up to continue using our services.
            </p>
            <footer className="text-sm">
              CryptoLuck Team
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="md:w-1/2 w-full h-full min-h-screen flex items-center justify-center relative overflow-hidden">
        <BackgroundPattern className="absolute inset-0 left-1/2 z-0 -translate-x-1/2 opacity-75 dark:opacity-50" />
        {children}
      </div>
    </section>
  );
};

export default Layout;
