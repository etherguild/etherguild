"use client";

import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { WalletComponents } from "@/components/wallet/wallet";
import Link from "next/link";
import { useNavbar } from "@/app/contexts/navbar-context";

export function Navbar() {
  const { showWallet, showNavbar } = useNavbar();

  if (!showNavbar) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50 bg-background/20 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/image/ether-guild-logo.png"
            alt="EtherGuild Logo"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="font-bold text-white">Ether Guild</span>
        </Link>
      </div>

      <div className="flex items-center gap-4 relative z-[60]">
        <ModeToggle />
        <a href="/about" className="text-white hover:text-gray-300">
          About
        </a>
        <Link
          href="/join"
          className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Join Us
        </Link>
        {showWallet && <WalletComponents />}
      </div>
    </nav>
  );
}
